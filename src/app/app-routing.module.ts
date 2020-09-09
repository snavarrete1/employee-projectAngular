import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { AuthGuard } from './auth/auth.guard';
const routes: Routes = [
  {
    path:'employee-home', component: EmployeeHomeComponent
  },
  {
    path:'employee-login', component: EmployeeLoginComponent
  },
  {
    path: 'show', component: ShowEmployeeComponent, canActivate:[AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
