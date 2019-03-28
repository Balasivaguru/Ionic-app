import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router'
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { LoginAlertComponent } from './components/login-alert/login-alert.component';
import { ContestCreationComponent } from './components/contest-creation/contest-creation.component';
import { ContestPageComponent } from './components/contest-page/contest-page.component';
import { AppComponent } from './app.component';


const routes: Routes =[
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'app',component:AppComponent},
  {path:'login',component:LoginpageComponent},
  {path:'home',component:NavigationbarComponent},
  {path:'notifications',component:NavigationbarComponent},
  {path:'add',component:NavigationbarComponent},
  {path:'profile',component:NavigationbarComponent},
  {path:'menu',component:NavigationbarComponent},
  {path:'alert',component:LoginAlertComponent},
  {path:'create',component:ContestCreationComponent},
  {path:'contest',component:ContestPageComponent}  
];
@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes),],
  exports:[ RouterModule]
})
 

export class AppRoutingModule { }
