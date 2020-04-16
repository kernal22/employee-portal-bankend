import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {LayoutComponent} from '../layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LeaveDetailsComponent} from './leave-details/leave-details.component';

import {AuthGuardService} from '../guard/auth.guard';

export const routes: Routes = [
    {   path: '',
        component: LayoutComponent,
        canActivateChild: [AuthGuardService],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'applyLeave', component: LeaveDetailsComponent},
            {path: '', redirectTo: 'dashboard'}
        ]
    }
]

export const routing : ModuleWithProviders = RouterModule.forChild(routes);
