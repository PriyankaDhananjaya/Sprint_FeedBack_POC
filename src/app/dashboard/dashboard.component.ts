import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardPage = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    if(this.router.url === '/dashboard') {
      this.dashboardPage = true;
    } else {
      this.dashboardPage = false;
    }
  }
}
