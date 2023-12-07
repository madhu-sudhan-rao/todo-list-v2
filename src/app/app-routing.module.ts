import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { AuthPanelComponent } from './modules/auth/auth-panel/auth-panel.component';

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
    loadChildren: ()=>import('../app/modules/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
