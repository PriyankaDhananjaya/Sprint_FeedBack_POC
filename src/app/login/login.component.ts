import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AlertService } from '../services/alert.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.pattern("^[a-z0-9_-]{6,15}$")]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value).subscribe(
              data => {
                  console.log(data)
                  window.alert(data.message);
                  this.router.navigate(['./dashboard']);
              },
              error => {
                window.alert("user login failed.")
                  this.alertService.error(error);
                  this.loading = false;
              });
  }

  onRegister() {
   
    this.router.navigate(['/register']);
    console.log("hiu",this.router.url);
  }
}
