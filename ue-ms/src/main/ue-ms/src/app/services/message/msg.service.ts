import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor() { }

  private bean:any={
    401: "Session Expired ! Please try loggin in again...",
    403: "Access Denied !",
    500: "Internal Server Error !",
    400: "Invalid Data !"
  };

  show(code:number):string{
    console.log("Nothing for "+code);
    return this.bean[code]!=undefined ? this.bean[code] : "Unable to connect to server !";
  }

}