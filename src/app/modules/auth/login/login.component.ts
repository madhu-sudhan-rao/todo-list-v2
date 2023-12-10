import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ){}

  
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/dashboard'])
    }
    this.loginForm = this.fb.group({
      username : [null, Validators.required],
      password : [null, Validators.required],
    })
      
  }

  onLogin(){
    this.auth.login(this.loginForm.value);
    // this.auth.login(this.loginForm.value).subscribe(
    //   (data)=>{
    //     console.log(data)
    //   }
    // )
  }

  toRegisterPage(){
    this.router.navigate(['/auth/register'])

  }

}
