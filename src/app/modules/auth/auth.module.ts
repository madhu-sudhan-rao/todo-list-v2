import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthPanelComponent } from './auth-panel/auth-panel.component';
import { DataInterceptor } from 'src/app/core/interceptors/data.interceptor';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    AuthPanelComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
