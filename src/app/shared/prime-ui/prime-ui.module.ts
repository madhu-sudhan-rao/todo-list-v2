import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

const primeNgComponents = [
  InputTextModule
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
