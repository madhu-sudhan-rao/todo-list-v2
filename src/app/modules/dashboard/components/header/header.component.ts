import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, first } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UserDataService } from 'src/app/shared/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // userName$: Observable<string>;
  username!: string;

  constructor(
    private store: Store<{user: string}>,
    private auth: AuthService,
    private userData: UserDataService
  ){
    // this.userName$ = store.select('user')
    
    // this.userName$.subscribe((data)=>{
    //   console.log(data);
      
    //   this.getFirstLetter(this.username)
    //   console.log(data);
    // })
    this.username = "Todo List"

    // this.username = this.userData.user?.displayName
  }

  getFirstLetter(username: string){
    let firstLetter = this.username.charAt(0);
    return firstLetter;
  }

  logout(){
    this.auth.logout()
  }


}
