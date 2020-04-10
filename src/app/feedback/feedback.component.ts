import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../models/feedback';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm: FormGroup;
  interns:any[];
  managers: any[];
  feedbacks: Array<Feedback>;
  constructor(private formBuilder: FormBuilder,
              private feedbackService: FeedbackService) { 
                this.feedbacks =[];
                this.interns = [];
                this.managers = [];
              }

  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      InternName: ['', [Validators.required, Validators.pattern("^[a-z0-9_-]{6,15}$")]],
      ProblemSolvingAnalyzingSkill: ['', Validators.required],
      ProjectProcessCompliance: ['', Validators.required],
      TechnicalExcellence: ['', Validators.required],
      OverallTechnicalCompitency:['', Validators.required],
      Manager: ['', [Validators.required, Validators.pattern("^[a-z0-9_-]{6,15}$")]],
      ProjectDelivery: ['', Validators.required],
      Teaming: ['', Validators.required],
      Communication: ['', Validators.required],
      Discipline: ['', Validators.required]
    });
   this.feedbackService.getFeedbacks().subscribe(feedback => {
      this.feedbacks= feedback;
      feedback.forEach(x=> this.interns.push(x.internId));
      feedback.forEach(x=> this.managers.push(x.userId));
      this.managers = Array.from(new Set(this.managers));
    });
  }

  submitFeedback() {
    console.log("im inside submit feedback")
  }

  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
   }

}
