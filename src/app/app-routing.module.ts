import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { AuthPanelComponent } from './modules/auth/auth-panel/auth-panel.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { PageNotFoundComponent } from './shared/components/wildcard-components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'auth/login'
  },
  {
    path: "auth",
    component: AuthPanelComponent,
    loadChildren: ()=>import('../app/modules/auth/auth.module').then((m)=>m.AuthModule)
  },
  {
    path:"dashboard",
    canActivate: [AuthGuard],
    loadChildren: ()=>import('../app/modules/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path: '**',
    title: 'Error',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
