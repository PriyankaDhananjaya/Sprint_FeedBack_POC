import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-gst-add',
  templateUrl: './gst-add.component.html',
  styleUrls: ['./gst-add.component.css']
})
export class GstAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private bs: BusinessService) { }

  ngOnInit() {
    this.angForm = this.fb.group({
      personName: ['', Validators.required],
      businessName: ['', Validators.required],
      businessGstNumber: ['', Validators.required]
    });
  }

  addBusiness(personname, businesname, businessgstnumber) {
    this.bs.addBusiness(personname, businesname, businessgstnumber);
  }

  get personName() {
    return this.angForm.controls['personName'];
  }

  get businessName() {
    return this.angForm.controls['businessName'];
  }

  get businessGstNumber() {
    return this.angForm.controls['businessGstNumber'];
  }
}
