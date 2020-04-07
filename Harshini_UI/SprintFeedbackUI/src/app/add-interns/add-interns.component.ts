import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators,FormBuilder,FormGroupDirective} from '@angular/forms';
import { UserDataService } from '../Service/user-data.service';
import { intern,project } from '../Models/Data.model';


@Component({
  selector: 'app-add-interns',
  templateUrl: './add-interns.component.html',
  styleUrls: ['./add-interns.component.css']
})

export class AddInternsComponent implements OnInit {
  @ViewChild (FormGroupDirective) Form;
  public projects : project;
  

  constructor(private fb: FormBuilder, private _userDataService : UserDataService) { }

  ngOnInit() {
  
    this._userDataService.getProjects().
    subscribe( projectName => this.projects = projectName);
    
  }

  titleAlert: string = 'This field is required';
  addNewIntern = this.fb.group({
    'internName': [null, Validators.required],
    'projectName': [null,Validators.required]
  });

  get internName(){
    return this.addNewIntern.get('internName');
  }
 get projectName(){
   return this.addNewIntern.get('projectName');
 }
   
  onSubmit(){
    this._userDataService.createNewIntern(this.addNewIntern.value).subscribe(
      (data:intern) => {
        console.log(data);
        this.Form.resetForm();
      },
      (error:any) => console.log(error)); 
  }

}
