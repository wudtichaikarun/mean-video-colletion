import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmModule } from 'angular2-bootstrap-confirm';

// Service
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SafePipe } from './shared/safe.pipe';
import { AuthHttpService } from './shared/auth-http.service'
import { VideoService } from './services/video.service'



// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VideoCenterComponent } from './components/videos/video-center/video-center.component';
import { VideoDetailComponent } from './components/videos/video-detail/video-detail.component';
import { VideoListComponent } from './components/videos/video-list/video-list.component';

// Guard
import { AuthGuard } from './guards/auth.guard';

// Routes module
import { routes } from './app-routing.module';

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
    RouterModule.forRoot(routes),
    FlashMessagesModule,
    ReactiveFormsModule,
    ConfirmModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AuthHttpService,
    VideoService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
