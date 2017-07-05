import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/home/home.component'
import { VideoCenterComponent } from './components/videos/video-center/video-center.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export  const routes: Routes = [
    {
        path: '', redirectTo:'/home',
        pathMatch: 'full'
       
    },
    {
        path: 'home',
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
    },
    {
        path: 'videos',
        component: VideoCenterComponent
    }
]