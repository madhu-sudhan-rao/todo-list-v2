import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firebaseConfig } from 'src/firebase-config/firebase-config';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private baseUrl: string = 'https://todo-list-dfabf-default-rtdb.firebaseio.com/';
  private baseUrl: string = firebaseConfig.databaseURL;
  isLoggedIn: boolean = false;
  constructor(
    private http: HttpClient,
    private fireAuth: AngularFireAuth,
    private router: Router,

  ) { }

  login(loginData: {username: string, password: string}){
    // return this.http.post(`${this.baseUrl}/login.json`, loginData)
    this.fireAuth.signInWithEmailAndPassword(loginData.username, loginData.password).then(
      (data)=>{
        console.log(data.user)
        this.router.navigate(['dashboard'])
        data.user?.updateProfile({
          displayName: "Madhu"
        })
        console.log(data.user);
        console.log(data.user?.displayName);
        // data.user?.displayName = "Madhu"
        
      }
    )
  }

  register(registerData: {username: string, password: string}){
    this.fireAuth.createUserWithEmailAndPassword(registerData.username, registerData.password).then(
      (data)=>{
        console.log(data);
        
      }
    )

  }

  addUser(registerData: any){
    // registerData.id = this.afs.createId()
    // return this.afs.collection('/users').add(registerData)
  }

  getUsers(){
  }
}
