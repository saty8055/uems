import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { BotService } from '../services/notification-bot/bot.service';
import { ValidatorService } from '../services/validator/validator.service';
import { LoaderComponent } from '../loader/loader.component';
import { MsgService } from '../services/message/msg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    public http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private bot: BotService,
    private validator: ValidatorService,
    private msg: MsgService
  ) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  goAndRegister() {
    this.router.navigateByUrl("/register");
  }

  ngOnInit() {

    if (localStorage.getItem('currentToken')) {
    }

    if (localStorage.getItem('remember') == "true") {
      var myUser = localStorage.getItem("savedUser");
      var myPass = localStorage.getItem("savedPassword");
      if (this.validator.isNotBlank(myUser) && this.validator.isNotBlank(myPass)) {
        this.form.patchValue({
          username: myUser,
          password: myPass
        });
        this.remember = true;
      }
    }
  }

  @ViewChild(LoaderComponent, { static: true })
  private loader: LoaderComponent;

  confirmForLogin() {
    if (this.form.get('username').value == "")
      this.bot.fail("Please enter a valid username !");
    else if (this.form.get('password').value == "")
      this.bot.fail("Please enter a valid password !");
    else
      this.login();
  }

  login() {

    this.loader.load();
    this.api.login(this.form.value).subscribe(response => {
      this.api.validateResponse(response, data => {
        this.loader.resume();
        if (this.remember) {
          localStorage.setItem("savedUser", this.form.get("username").value);
          localStorage.setItem("savedPassword", this.form.get("password").value);
        }
        localStorage.setItem('currentToken', data.token);
        localStorage.setItem('currentRole', data.user.role);
        this.router.navigateByUrl("/");
      }, error => {
        this.loader.resume();
        this.bot.fail(error);
      })
    });

  }

  remember: boolean = false;
  rememberMe() {
    localStorage.setItem("savedUser", this.form.get("username").value);
    localStorage.setItem("savedPassword", this.form.get("password").value);
    this.remember = !this.remember;
    localStorage.setItem("remember", this.remember.toString());
  }

  showPass: boolean = false;
  togglePassword() {
    this.showPass = !this.showPass;
  }

  username: string = "";
  resetPassword() {
    if (this.username == "")
      this.bot.fail("Please enter a username first !");
    else {
      this.api.forgot(this.username).subscribe(data => {
        this.bot.alert("The reset link has been sent to your registered e-mail !");
      }, error => {
        this.bot.fail(this.msg.show(error.error.status));
      });
    }
  }

}
