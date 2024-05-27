import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './admin/guards/admin-auth.guard';
import { UnauthPageComponent } from './shared/components/unauth-page/unauth-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch:'full'
  },
  // Auth module
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  // Admin module
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },

  // User module
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },

  {
    path: 'unauthorized',
    component: UnauthPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
