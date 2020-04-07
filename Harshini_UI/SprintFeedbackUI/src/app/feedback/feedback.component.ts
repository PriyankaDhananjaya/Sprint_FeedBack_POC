import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../Service/user-data.service';
import { project, intern } from '../Models/Data.model';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  selectedValue: string;
  public internList;

  constructor(private _userDataService : UserDataService) {  }

  ngOnInit(): void {

    this.internList = this._userDataService.getInterns().subscribe( interns => this.internList = interns);

  }


    
    
   

}
