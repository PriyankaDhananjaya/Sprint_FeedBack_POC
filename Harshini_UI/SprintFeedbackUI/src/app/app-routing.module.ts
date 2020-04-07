import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddInternsComponent } from './add-interns/add-interns.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {
    path:'',component: LoginComponent
  },
  {
    path:'dashboard', component: DashboardComponent,
    children:[
      {
        path:'',component:HomeComponent
      },
      {
        path: 'addProject', component: AddProjectComponent
      },
      {
        path:'addIntern', component: AddInternsComponent
      },
      {
        path: 'feedback', component: FeedbackComponent
      }] 
  } , 
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
