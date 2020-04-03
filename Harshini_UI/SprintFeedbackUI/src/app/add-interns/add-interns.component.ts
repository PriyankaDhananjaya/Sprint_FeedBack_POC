import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder} from '@angular/forms';

interface project {
  projectName: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-interns',
  templateUrl: './add-interns.component.html',
  styleUrls: ['./add-interns.component.css']
})

export class AddInternsComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  titleAlert: string = 'This field is required';
  addNewIntern = this.fb.group({
    'internName': [null, Validators.required],
    'collegeName': [null, Validators.required] 
  });

  get internName(){
    return this.addNewIntern.get('internName');
  }
  get collegeName(){
    return this.addNewIntern.get('collegeName');
  }


  projectName: project[] = [
    {projectName: 'Project 1',viewValue:'Project 1'},
    {projectName: 'Project 2',viewValue:'Project 2'},
    {projectName: 'Project 3',viewValue:'Project 3'}
  ];

  onSubmit(){

  }

}
