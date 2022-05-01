import { Component, OnInit, ViewChild } from '@angular/core';
import { LoaderComponent } from 'src/app/loader/loader.component';
import { ApiService } from 'src/app/services/api/api.service';
import { MsgService } from 'src/app/services/message/msg.service';
import { BotService } from 'src/app/services/notification-bot/bot.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private bot: BotService, private api: ApiService, private msg: MsgService) { }

  user: any = {};
  ngOnInit() {
    this.api.getUser().subscribe(data => {
      this.loader.resume();
      this.user = data;
    }, error => {
      this.loader.resume();
      this.bot.fail(this.msg.show(error.error.status));
    })
  }

  pass: string = "";
  cPass: string = "";
  oldPass: string = "";
  changePassword() {
    if (this.cPass == this.pass && this.pass != "" && this.oldPass != "") {
      this.loader.load();
      this.api.updatePassword(this.pass, this.oldPass).subscribe(data => {
        this.pass = "";
        this.cPass = "";
        this.loader.resume();
        this.bot.success("Password Changed Successfully !");
      }, error => {
        this.pass = "";
        this.cPass = "";
        this.loader.resume();
        this.bot.fail(this.msg.show(error.error.status));
      })
    }
    else if (this.pass == "") {
      this.bot.fail("Password cannot be blank");
    }
    else if (this.cPass == "")
      this.bot.fail("Password cannot be blank");
    else if (this.oldPass == "")
      this.bot.fail("Current Password is required");
    else
      this.bot.fail("Passwords in both the fields should be equal");
  }

  @ViewChild(LoaderComponent, { static: true })
  private loader: LoaderComponent;

}
