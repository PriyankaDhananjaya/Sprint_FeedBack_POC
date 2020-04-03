import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder} from '@angular/forms';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {

  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  
  addNewProject = this.fb.group({
    'projectName': [null, Validators.required],
    'chiefMentor': [null, Validators.required],
    'firstMentor': [null, Validators.required],
    'secondMentor': [null, Validators.required],
    'thirdMentor': [null, Validators.required],
    'buddyMember': [null, Validators.required], 
  });

  get projectName(){
    return this.addNewProject.get('projectName');
  }
  get chiefMentor(){
    return this.addNewProject.get('chiefMentor');
  }
  get firstMentor(){
    return this.addNewProject.get('firstMentor');
  }
  get secondMentor(){
    return this.addNewProject.get('secondMentor');
  }
  get thirdMentor(){
    return this.addNewProject.get('thirdMentor');
  }
  get buddyMember(){
    return this.addNewProject.get('buddyMember');
  }


  onSubmit() {
   
  }
  



}
