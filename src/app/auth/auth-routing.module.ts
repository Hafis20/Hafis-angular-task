import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:AuthComponent, canActivate:[authGuard],
    children:[
      {
        path:'login',
        component:LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
