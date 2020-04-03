import { Component} from '@angular/core';
import{ FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  profileForm = this.fb.group({
    userName: [null, 
    [Validators.required,
    Validators.minLength(4)]],
    passWord: [null,[Validators.required,
    Validators.minLength(8)]],
    // Validators.pattern("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})")  
  });
  constructor(private fb: FormBuilder,private route:Router) { }
  
  get userName() {
    return this.profileForm.get('userName')
  }
  get passWord() {
    return this.profileForm.get('passWord')
  }
  onSubmit() {  
    console.log(this.profileForm.value);
    this.route.navigate(['/dashboard']);
  }
}



