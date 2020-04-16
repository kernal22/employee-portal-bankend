import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {LayoutModule} from '../layout/layout.module';

import {DashboardComponent} from './dashboard/dashboard.component';
import {LeaveDetailsComponent} from './leave-details/leave-details.component';

import {routing} from './components.routing';

@NgModule({
    declarations: [
        DashboardComponent,
        LeaveDetailsComponent
    ],
    imports: [
        LayoutModule,
        CommonModule,
        routing
    ],
    exports: [
        DashboardComponent,
        LeaveDetailsComponent
    ],
    providers: [

    ]
})
export class ComponentsModule {

}