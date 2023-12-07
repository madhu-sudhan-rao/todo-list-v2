import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DataInterceptor } from './interceptors/data.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DataInterceptor
  ]
})
export class CoreModule { }
