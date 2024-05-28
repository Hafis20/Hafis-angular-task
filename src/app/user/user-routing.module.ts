import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { userAuthGuard } from './guards/user-auth.guard';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path:'', component:UserComponent,canActivate:[userAuthGuard],
    children:[
      {
        path:'dashboard',
        component:UserDashboardComponent
      },
      {
        path:'chat',
        component:ChatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
