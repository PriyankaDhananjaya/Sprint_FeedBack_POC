import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;
  loginPage:boolean;
  log = 'priyanka'
  arr = ['a','a','b','b'];
  constructor(
        private authenticationService: AuthenticationService,
        private loadingBar: SlimLoadingBarService, private router: Router) {
          this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
          router.events.forEach((event) => {
            if(event instanceof NavigationStart){
              if(event['url'] == '/login'){
                this.loginPage = true;
              } else {
                this.loginPage = false;
              }
            }
          });
  }

  ngOnInit(){
    console.log(this.log.split('').reverse().join(''));
    console.log(Array.from(new Set(this.arr)));

    // if(window.location.href.includes('login')) {
    //   this.loginPage = true;
    // } else {
    //   this.loginPage = false;
    // }
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
