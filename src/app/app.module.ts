
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { NavigationbarComponent } from './components/navigationbar/navigationbar.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AddComponent } from './components/add/add.component';
import { Notifications, Timeline, User, Upload, Photos, Link } from './services/data';
import { MenuComponent } from './components/menu/menu.component';
import { SidenavService } from './services/sidenav.service';
import { LoginAlertComponent } from './components/login-alert/login-alert.component';
import { ContestCreationComponent } from './components/contest-creation/contest-creation.component';
import { ContestPageComponent } from './components/contest-page/contest-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    NavigationbarComponent,
    NotificationsComponent,
    ProfileComponent,
    HomeComponent,
    AddComponent,
    MenuComponent,
    LoginAlertComponent,
    ContestCreationComponent,
    ContestPageComponent,
    

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
 
    //MatProgressSpinnerModule

  ],
  providers: [Notifications, Timeline,SidenavService,User,Upload,Photos,Link],
  bootstrap: [AppComponent]
})
export class AppModule { }
