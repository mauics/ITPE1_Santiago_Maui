import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsermComponent } from './userm/userm.component';
import { DashboardinComponent } from './dashboardin/dashboardin.component';
import { NotuserComponent } from './notuser/notuser.component';
import { ProductComponent } from './product/product.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UsermComponent,
    DashboardinComponent,
    NotuserComponent,
    ProductComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
