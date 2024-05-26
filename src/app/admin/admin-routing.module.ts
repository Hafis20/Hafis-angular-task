import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { adminAuthGuard } from './guards/admin-auth.guard';


const routes: Routes = [
  {
    path: '', component: AdminComponent, canActivate:[adminAuthGuard],
    children: [
      {
        path: 'dashboard',
        component:AdminDashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
