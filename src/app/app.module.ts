import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormComponent } from './form/form.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { RouterModule, Routes } from '@angular/router';
const AppRoutes:Routes=[
  {
    path:"",component:AddEmployeeComponent
  },
  {
    path:"search",component:SearchEmployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    FormComponent,
    SearchEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
