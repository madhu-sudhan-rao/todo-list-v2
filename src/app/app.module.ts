import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat' ;
import { firebaseConfig } from 'src/firebase-config/firebase-config';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DataInterceptor } from './core/interceptors/data.interceptor';
import { StoreModule } from '@ngrx/store';
import { userDetails } from './shared/store/user/user.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    StoreModule.forRoot({
      user: userDetails
    }, {})


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
