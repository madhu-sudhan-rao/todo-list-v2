import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

const primeNgComponents = [
  InputTextModule,
  PasswordModule,
  ButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    primeNgComponents
  ],
  exports : [
    primeNgComponents
  ]
})
export class PrimeUiModule { }
