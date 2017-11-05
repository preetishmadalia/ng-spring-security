import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home-component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login-component';

const appRoutes : Routes = [
    
    {
        path: 'home',
        component : HomeComponent
    },
    {
        path: 'login',
        component : LoginComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);