import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './inputs/input-text/input-text.component';
import { PrimeUiModule } from '../prime-ui/prime-ui.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordComponent } from './inputs/password/password.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    InputTextComponent,
    PasswordComponent,
    ButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrimeUiModule,
    ReactiveFormsModule
  ],
  exports: [
    InputTextComponent,
    PasswordComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
