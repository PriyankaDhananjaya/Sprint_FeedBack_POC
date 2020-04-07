import { Component, OnInit,ViewChild } from '@angular/core';
import { UserDataService } from '../Service/user-data.service';
import { project, intern, feedback,user } from '../Models/Data.model';
import{ FormBuilder,Validators,FormGroupDirective} from '@angular/forms'
import {Router} from '@angular/router';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  selectedValue: string;
  titleAlert: string = 'This field is required';
  minAlert: string = 'Minimum value should be 0';
  maxAlert: string = 'Maximum value should be 5';
  public feedback : feedback;
  public internList : any;
  public userList : any;

  @ViewChild(FormGroupDirective) Form;

  feedbackForm = this.fb.group({
    userName: [null,[Validators.required]],
    internName: [null,[Validators.required]],
    problemSolving: [null,[Validators.required,Validators.min(0),Validators.max(5)]],
    technicalExcellence: [null,[Validators.required,Validators.min(0),Validators.max(5)]],
    projectDelivery: [null,[Validators.required,Validators.min(0),Validators.max(5)]],
    projectProcessCompilance: [null,[Validators.required,Validators.min(0),Validators.max(5)]],
    teaming: [null,[Validators.required,Validators.min(0),Validators.max(5)]],
    discipline: [null,[Validators.required,Validators.min(0),Validators.max(5)]],
    communication: [null,[Validators.required,Validators.min(0),Validators.max(5)]],
    overallTechnicalCompitency: [null,[Validators.required,Validators.min(0),Validators.max(5)]]  
  });

  constructor(private _userDataService : UserDataService,private fb: FormBuilder,private route:Router) {  }

  ngOnInit(): void {

    this.internList = this._userDataService.getInterns().subscribe( interns => this.internList = interns);
    this.userList = this._userDataService.getUser().subscribe( users => this.userList = users);
  }

  get userName() {
    return this.feedbackForm.get('userName')
  }
  get internName() {
    return this.feedbackForm.get('internName')
  }
  get problemSolving() {
    return this.feedbackForm.get('problemSolving')
  }
  get technicalExcellence() {
    return this.feedbackForm.get('technicalExcellence')
  }
  get projectDelivery() {
    return this.feedbackForm.get('projectDelivery')
  }
  get projectProcessCompilance() {
    return this.feedbackForm.get('projectProcessCompilance')
  }
  get teaming() {
    return this.feedbackForm.get('teaming')
  }
  get discipline() {
    return this.feedbackForm.get('discipline')
  }
  get communication() {
    return this.feedbackForm.get('communication')
  }
  get overallTechnicalCompitency() {
    return this.feedbackForm.get('overallTechnicalCompitency')
  }
  onSubmit() {  
    
    this._userDataService.submitFeedback(this.feedbackForm.value).subscribe(
      (data:feedback) => {
        console.log(data);
        this.Form.resetForm();
      },
      (error:any) => console.log(error)); 

    
  }
   
}
