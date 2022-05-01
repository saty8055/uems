import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { F04Component } from './f04/f04.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ResetComponent } from './reset/reset.component';
import { RegisterComponent } from './register/register.component';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { TasksComponent } from './dashboard/tasks/tasks.component';
import { ServicesComponent } from './dashboard/services/services.component';
import { TableComponent } from './dashboard/table/table.component';
import { BookingComponent } from './dashboard/booking/booking.component';

const routes: Routes = [{
  path: "",
  component: DashboardComponent,
  children: [{
    path: "profile",
    component: ProfileComponent
  },{
    path: "tables",
    component: TableComponent
  },{
    path: "bookings",
    component: BookingComponent
  },{
    path: "",
    redirectTo: "/tables",
    pathMatch: "full"
  }],
  canActivate: [AuthGuardService]
}, {
  path: "login",
  component: LoginComponent
}, {
  path: "register",
  component: RegisterComponent
}, {
  path: "reset/:token",
  component: ResetComponent
},
{
  path: '**',
  pathMatch: 'full',
  component: F04Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
