import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    UserComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule
  ]
})
export class UserModule { }
