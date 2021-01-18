import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppAsideModule, AppBreadcrumbModule, AppHeaderModule, AppFooterModule, AppSidebarModule, } from '@coreui/angular';


import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
};

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';

import { DefaultLayoutComponent } from './components/layout/default-layout/default-layout.component';
import { OtherLayoutComponent } from './components/layout/other-layout/other-layout.component';
import { P404Component } from './components/errors/p404/p404.component';
import { P500Component } from './components/errors/p500/p500.component';

import { RouterModule } from "@angular/router";
import { LayoutRoutingModule } from "./layout-routing.module";

const APP_CONTAINERS = [
    DefaultLayoutComponent
]

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutRoutingModule,
        AppAsideModule,
        AppBreadcrumbModule.forRoot(),
        AppFooterModule,
        AppHeaderModule,
        AppSidebarModule,
        PerfectScrollbarModule,
        BsDropdownModule.forRoot(),
        TabsModule.forRoot(),
        ChartsModule,
        IconModule,
        IconSetModule.forRoot(),
    ],
    declarations: [
        ...APP_CONTAINERS,
        OtherLayoutComponent,
        P404Component,
        P500Component],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers:[
        IconSetService,
    ]
})
export class LayoutModule {
    constructor() {
        console.log('test');
    }
}