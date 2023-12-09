import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firebaseConfig } from 'src/firebase-config/firebase-config';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { updateUserName } from 'src/app/shared/store/user/user.actions';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private baseUrl: string = 'https://todo-list-dfabf-default-rtdb.firebaseio.com/';
  private baseUrl: string = firebaseConfig.databaseURL;
  // isLoggedIn: boolean = false;
  constructor(
    private http: HttpClient,
    private fireAuth: AngularFireAuth,
    private router: Router,
    private store: Store,
    private userDataService: UserDataService
  ) { }

  login(loginData: {username: string, password: string}){
    // return this.http.post(`${this.baseUrl}/login.json`, loginData)
    this.fireAuth.signInWithEmailAndPassword(loginData.username, loginData.password).then(
      (data: any)=>{
        console.log(data.user)
        this.router.navigate(['dashboard'])
        // data.user?.updateProfile({
        //   displayName: "Madhu"
        // })
        console.log(data.user);
        console.log(data.user?.displayName);
        let username = data.user?.displayName;
        console.log(username, 'User');
        // data.user?.displayName = "Madhu"
        localStorage.setItem('username', username)
        this.store.dispatch(updateUserName(username))
        const user = data.user._delegate
        this.userDataService.setUserData(user);
        this.storeToken(user.stsTokenManager);
        
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

  storeToken(tokenObject:{}){
    const token = JSON.stringify(tokenObject);
    localStorage.setItem('token', token)
  }

  isLoggedIn(){
    console.log("login checking");
    
    return !!localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login'])
  }
}
