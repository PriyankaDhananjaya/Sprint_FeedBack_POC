import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Interns } from '../models/interns';
import { User } from '../models/user';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  // @ViewChild('closebutton') closebutton;
  feedbackForm: FormGroup;
  interns:Interns[];
  managers: User[];
  feedbacks: Array<Feedback>;
  ratings = ['Weak', 'Average','Good','Excellent']
  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private feedbackService: FeedbackService) { 
                this.feedbacks =[];
                this.interns = [];
                this.managers = [];
              }

  ngOnInit() {
    this.feedbackService.getInterns().subscribe(interns => {
      this.interns = interns;
      console.log(this.interns)
    });
    this.feedbackService.getUsers().subscribe(users => {
      this.managers = users;
      console.log(this.managers)
    });
    this.feedbackForm = this.formBuilder.group({
      InternId: [0, [Validators.required]],
      ProblemSolvingAnalyzingSkill: ['', Validators.required],
      ProjectProcessCompliance: ['', Validators.required],
      TechnicalExcellence: ['', Validators.required],
      OverallTechnicalCompitency:['', Validators.required],
      UserId: [0, Validators.required],
      ProjectDelivery: ['', Validators.required],
      Teaming: ['', Validators.required],
      Communication: ['', Validators.required],
      Discipline: ['', Validators.required]
    });
   this.feedbackService.getFeedbacks().subscribe(feedback => {
     console.log(feedback)
      this.feedbacks= feedback;

      // feedback.forEach(x=> { if((this.interns.includes(x))) { this.interns.push(x.internId)}});
      // feedback.forEach(x=> this.managers.push(x.userId));
      // this.managers = Array.from(new Set(this.managers));
    });

  }

  submitFeedback() {
    console.log("im inside submit feedback", this.feedbackForm.value)
    // stop here if form is invalid
    if (this.feedbackForm.invalid) {
      return "invalid form.";
  }
  this.feedbackForm.patchValue({
    InternId: 5,
    UserId: 3
  });

  console.log(JSON.stringify(this.feedbackForm.value))
  this.feedbackService.postFeedback(this.feedbackForm.value)
      .pipe(first())
      .subscribe(
          data => {
              console.log(data);
              this.router.navigate(['/dashboard']);
              window.alert("Feedback submitted successfully.")
              this.ngOnInit();    
              // this.closebutton.nativeElement.click();
          },
          error => {
            window.alert("feedback failed to respond.")
          });
  }

  get f() { return this.feedbackForm.controls; }
}
