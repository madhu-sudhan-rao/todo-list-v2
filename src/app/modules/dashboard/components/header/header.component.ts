import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, first } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  userName$: Observable<string>;
  username!: string;

  constructor(
    private store: Store<{user: string}>,
    private auth: AuthService
  ){
    this.userName$ = store.select('user')
    this.userName$.subscribe((data)=>{
      this.username = data
      this.getFirstLetter(this.username)
      console.log(data);
    })
  }


  getFirstLetter(username: string){
    let firstLetter = this.username.charAt(0);
    return firstLetter;
  }

  logout(){
    this.auth.logout()
  }


}
