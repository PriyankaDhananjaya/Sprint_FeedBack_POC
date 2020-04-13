import { Component} from '@angular/core';
import{ FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router';
import { user } from '../Models/Data.model';
import { UserDataService } from '../Service/user-data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userList ;

  public checkUser : string;
  public user : string;
  public password:string;

  public isValidUser : boolean;
  
  profileForm = this.fb.group({
    userName: [null, 
    [Validators.required,
    Validators.minLength(4)]],
    passWord: [null,[Validators.required,
    Validators.minLength(8)]],
    // Validators.pattern("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")  
  });
  constructor(private fb: FormBuilder,private route:Router,private _userDataService : UserDataService) { }
  
  get userName() {
    return this.profileForm.get('userName')
  }
  get passWord() {
    return this.profileForm.get('passWord')
  }
  onSubmit() {  

    console.log(this.profileForm.value);
    
  //   this._userDataService.getUser().subscribe(userData =>{ 
  //     let data:string = userData.userName;
  //     let dataPass: string = userData.password;
  //     if( data === this.user && dataPass === this.password )
  //     {
  //       this.isValidUser = true;
  //     }
  //     else
  //     {
  //       this.isValidUser = false;
  //     } 
  // });
  
    //this.checkUser = this.userList.where({userName:user});
     //console.log(this.isValidUser);
    
    //this.userList["userName"] === this.user && this.userList.passWord === this.password
      //if (this.isValidUser) this.route.navigate(['/dashboard']);
    
    this.route.navigate(['/dashboard']);
  }
}



