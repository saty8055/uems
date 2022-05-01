import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BotService {

  constructor(private toastr: ToastrService) { }

  success(msg:string) {
    this.toastr.success(msg,'success',{
      timeOut: 3600,
      positionClass:'toast-top-right',
      progressBar:true,
      closeButton:true,
    });
  }

  fail(msg:string) {
    this.toastr.error(msg,'Error' ,{
      timeOut: 3600,
      positionClass:'toast-top-right',
      progressBar:true,
      closeButton:true,
    });
  }

  warn(msg:string) {
    this.toastr.warning(msg,'Warning',{
      timeOut: 3600,
      positionClass:'toast-top-right',
      progressBar:true,
      closeButton:true,
    });
  }

  alert(msg:string) {
    this.toastr.info(msg,'Info',{
      timeOut: 3600,
      positionClass:'toast-top-right',
      progressBar:true,
      closeButton:true,
    });
  }

}
