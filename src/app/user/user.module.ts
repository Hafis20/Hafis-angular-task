import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CoreModule } from '../core/core.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ]
})
export class UserModule { }
