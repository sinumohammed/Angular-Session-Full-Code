import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCountComponent } from './employee-count/employee-count.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { EmployeeService } from './employee.service';


@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    EmployeeListComponent, 
    EmployeeCountComponent, 
    EmployeeComponent, 
    EmployeeTitlePipe
  ],
  providers:[EmployeeService]   
})
export class EmployeesModule { }
