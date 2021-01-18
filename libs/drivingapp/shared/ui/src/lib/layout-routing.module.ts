import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { P404Component } from "./components/errors/p404/p404.component";
import { P500Component } from "./components/errors/p500/p500.component";
import {LoginComponent, RegisterComponent} from '@the-driving-schoolv1/drivingapp/account';
import { DefaultLayoutComponent } from "./components/layout/default-layout/default-layout.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
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
            }
        ]
    },
    {path: '**', component: P404Component}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }