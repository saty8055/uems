import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BotService } from '../services/notification-bot/bot.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private bot: BotService) { }

  ngOnInit() {
    if (this.router.url.toString().includes("booking"))
      this.highlight("bookings");
      else if (this.router.url.toString().includes("table"))
        this.highlight("tables");
  }

  sideBar: boolean = true;
  sideBarMenu: boolean = true;
  toggleSideBar() {
    this.sideBar = !this.sideBar;
    if (!this.sideBarMenu) {
      var interval = setInterval(() => {
        this.sideBarMenu = true;
        clearInterval(interval);
      }, 150);
    }
    else
      this.sideBarMenu = false;
  }
  
  isAdmin():boolean {
    return localStorage.getItem("currentRole") == 'ADMIN';
  }
  
  highlight(key) {
    this.key = key;
  }

  key: string = "";
  activate(key) {
    this.key = key;
    this.router.navigateByUrl("/" + key);
  }

  logout() {
    localStorage.setItem("currentToken", undefined);
    this.bot.success("Logged out !");
    this.router.navigateByUrl("/login");
  }

  rightSideBar: boolean = false;
  toggleRightBar() {
    this.rightSideBar = !this.rightSideBar;
  }

}
