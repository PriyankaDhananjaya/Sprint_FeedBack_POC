import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators,FormBuilder, FormGroupDirective} from '@angular/forms';
import { UserDataService } from '../Service/user-data.service';
import { project } from '../Models/Data.model';



@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
  
export class AddProjectComponent implements OnInit {
  
  @ViewChild(FormGroupDirective) Form;

  titleAlert: string = 'This field is required';

  constructor(private fb: FormBuilder, private _userDataService : UserDataService) { }

  ngOnInit(): void {
  }
  
  addNewProject = this.fb.group({
    'projectName': [null, Validators.required],
    'projectDescription':[null,[Validators.required,Validators.minLength(10),Validators.maxLength(100)]],
    'chiefMentor': [null, Validators.required],
    'firstMentor': [null, Validators.required],
    'secondMentor': [null, Validators.required]
  });

  get projectName(){
    return this.addNewProject.get('projectName');
  }
  get projectDescription(){
    return this.addNewProject.get('projectDescription');
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
 


  onSubmit() {

    this._userDataService.createNewProject(this.addNewProject.value).subscribe(
      (data:project) => {
        console.log(data);
        this.Form.resetForm();
      },
      (error:any) => console.log(error));   
   
  }
  



}
