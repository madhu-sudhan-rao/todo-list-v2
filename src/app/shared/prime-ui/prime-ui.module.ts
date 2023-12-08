import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

const primeNgComponents = [
  InputTextModule,
  PasswordModule,
  ButtonModule,
  AvatarModule
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
