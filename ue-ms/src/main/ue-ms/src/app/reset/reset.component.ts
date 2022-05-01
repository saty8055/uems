import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { ApiService } from '../services/api/api.service';
import { MsgService } from '../services/message/msg.service';
import { BotService } from '../services/notification-bot/bot.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private bot:BotService, private msg:MsgService, private api:ApiService, private route:ActivatedRoute) {
    this.route.params.subscribe(val => {
      this.token=this.route.snapshot.paramMap.get("token");
    });
   }

  @ViewChild(LoaderComponent, {static:true})
  private loader:LoaderComponent;
  
  password:string="";
  confirmPassword:string="";
  ngOnInit() {
  }

  token:string;
  showPass: boolean = false;
  togglePassword() {
    this.showPass = !this.showPass;
  }

  changePassword(){
    if(this.password!="" && this.confirmPassword == this.password){
      this.api.reset(this.password, this.token).subscribe(data=>{
        this.bot.success("Password has been changed successfully !");
      }, error=>{
        this.bot.fail(this.msg.show(error.error.status));
      });
    }
    else if(this.password=="")
      this.bot.fail("Password cannot be blank");
    else
      this.bot.fail("Password should be same in both the fields !");
  }

}
