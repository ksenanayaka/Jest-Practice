import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanActivateRoutesGuard } from './can-activate-routes.guard';
import { CanActivateLoginRoutesGuard } from './can-activate-login-routes.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [CanActivateLoginRoutesGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [CanActivateLoginRoutesGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [CanActivateRoutesGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateRoutesGuard, CanActivateLoginRoutesGuard]
})
export class AppRoutingModule {}
