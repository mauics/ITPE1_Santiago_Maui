import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UsermComponent } from './userm/userm.component';
import { NotuserComponent } from './notuser/notuser.component';
import { DashboardinComponent } from './dashboardin/dashboardin.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path:'', 
    loadChildren: ()=>import('./layout/layout.module')
                        .then(mod => mod.LayoutModule)
  },

  { path: 'login', component: LoginComponent },
  
  { path: 'registration', component: RegistrationComponent },

  { path: 'userm', component: UsermComponent },

  { path: 'notuser', component: NotuserComponent },

  { path: 'dashboardin', component: DashboardinComponent },

  { path: 'product', component:ProductComponent },

  {
    path:'',
    component: AppComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
