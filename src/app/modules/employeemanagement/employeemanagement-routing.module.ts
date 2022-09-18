import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Auth/shared/auth.guard';

import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


const routes: Routes = [
  { path: "", component: EmployeeListComponent ,canActivate: [AuthGuard] },
  { path: "list", component: EmployeeListComponent ,canActivate: [AuthGuard] },
  { path: "list/:employeeId", component: EmployeeListComponent ,canActivate: [AuthGuard] },
  { path: "add", component: CreateEmployeeComponent ,canActivate: [AuthGuard] },
  { path: 'edit/:id', component: CreateEmployeeComponent,canActivate: [AuthGuard]  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeemanagementRoutingModule { }
