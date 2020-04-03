import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideNav: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideNav.emit();
  }

  exitApp(){
    this.route.navigate([''])
  }

}
