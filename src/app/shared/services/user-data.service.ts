import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user!: {}
  constructor(
    private router: Router,
    // private fireAuth: AngularFireAuth,
    // private afs: A

  ) { }

  setUserData(userData: any): void{
    this.user = userData;
    console.log("User data assigned");
    console.log(this.user);
    
    
  }


}
