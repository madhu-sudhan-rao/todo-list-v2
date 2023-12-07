import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginForm !: FormGroup
  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ){}

  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : [null, Validators.required],
      password : [null, Validators.required],
    })
      
  }

  onLogin(){
    console.log(this.loginForm);
    this.auth.register(this.loginForm.value);
    // this.auth.login(this.loginForm.value).subscribe(
    //   (data)=>{
    //     console.log(data)
    //   }
    // )
  }
}
