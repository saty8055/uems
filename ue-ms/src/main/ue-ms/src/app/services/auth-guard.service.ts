import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { BotService } from './notification-bot/bot.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private api: ApiService, private bot:BotService) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      let token = localStorage.getItem("currentToken");
      let currentRole = localStorage.getItem("currentRole");
      if (token == null || token == "null" || token == "undefined" || token == undefined || (currentRole!="ADMIN" && currentRole!="AUDITOR"))
      {
          this.router.navigateByUrl("/login");
          return false;
      }    
      let status = this.api.isLoggedIn();
      if (!status){
          this.router.navigateByUrl("/login");
      }
      return status;
  }

}
