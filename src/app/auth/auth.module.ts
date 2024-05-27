import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AuthModule { }
