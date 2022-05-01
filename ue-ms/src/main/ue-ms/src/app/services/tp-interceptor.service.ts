import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BotService } from './notification-bot/bot.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class TpInterceptorServicer implements HttpInterceptor {

    constructor(private bot:BotService, private router:Router) { }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const token = window.localStorage.getItem("currentToken");
        if (token) {
            request = request.clone({
                setHeaders: {
                    X_ACCESS_TOKEN: token
                }
            });
        }
        return next.handle(request).pipe(
            tap(
                event => {
                    if (event instanceof HttpResponse) {
                    }
                },
                error => {
                    if (error instanceof HttpErrorResponse) {
                        if (error.status == 401) {
                            localStorage.setItem("currentToken", undefined);
                            this.router.navigateByUrl("/login");
                        }
                    }
                }
            )
        );
    }
}
