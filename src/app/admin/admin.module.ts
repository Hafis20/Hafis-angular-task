import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from '../core/core.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ListUsersComponent } from './components/list-users/list-users.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ListUsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AdminModule { }
