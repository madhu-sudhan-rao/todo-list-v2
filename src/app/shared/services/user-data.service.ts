import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private user: any
  constructor(
    private router: Router,
    // private fireAuth: AngularFireAuth,

  ) { }

  


}
