import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { PrimeUiModule } from './prime-ui/prime-ui.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    PrimeUiModule
  ],
  exports:[
    ComponentsModule,
    ComponentsModule,
    PrimeUiModule
  ]
})
export class SharedModule { }
