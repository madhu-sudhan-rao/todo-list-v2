import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { PrimeUiModule } from '../prime-ui/prime-ui.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    CommonModule,
    PrimeUiModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent
  ]
})
export class ComponentsModule { }
