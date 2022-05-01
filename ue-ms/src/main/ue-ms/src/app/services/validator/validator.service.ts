import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  notNull(value:any):boolean{
    return !(value == "undefined" || value == undefined || value == null || value == "null");
  }

  isNotBlank(value:any):boolean{
    return this.notNull(value) && value!="";
  }

  getFactors(t:string):any{
    let time = new Date(t);
    let factor:any={};
    factor.hour=time.getHours();
    factor.minute=time.getMinutes();
    return factor;
  }

  isEmail(search:string):boolean
    {
        var  eFlag:boolean;
        let reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        eFlag = reg.test(search);
        return eFlag;
    }

    getRandomString(length:number):string{
      let text="fe_temp_";
      let possible="qwertyuiplkjhgfdsazxcvbnm_-";
      for(let i=0; i<length; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    }

}
