import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { CoreModule } from '../core/core.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class UserModule { }
