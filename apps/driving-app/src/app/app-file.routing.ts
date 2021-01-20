import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import Containers
import {DefaultLayoutComponent} from '@the-driving-schoolv1/drivingapp/shared/ui';

//Components
import {LoginComponent, RegisterComponent} from '@the-driving-schoolv1/drivingapp/account';
import {P404Component, P500Component} from '@the-driving-schoolv1/drivingapp/shared/ui';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: P404Component,
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: P500Component,
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Register Page'
        }
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('@the-driving-schoolv1/drivingapp/dashboard').then(m => m.DashboardModule)
              },
        ],
    },
    { path: '**', component: P404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }