import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AuthGuard } from './guards/auth.guard';
import { VideoCenterComponent } from './components/videos/video-center/video-center.component';
import { VideoDetailComponent } from './components/videos/video-detail/video-detail.component';
import { VideoListComponent } from './components/videos/video-list/video-list.component';
import { SafePipe } from './shared/safe.pipe';



const appRoutes: Routes = [
 {
   path: '', 
   component: HomeComponent
  },
 {
   path: 'register', 
   component: RegisterComponent
  },
 {
   path: 'login', 
   component: LoginComponent
  },
 {
   path: 'dashboard', 
   component: DashboardComponent,
   canActivate: [AuthGuard]
  },
 {
   path: 'profile', 
   component: ProfileComponent,
   canActivate: [AuthGuard]
  }
 
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    VideoCenterComponent,
    VideoDetailComponent,
    VideoListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
