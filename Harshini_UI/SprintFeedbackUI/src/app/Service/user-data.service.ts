import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { project,intern,feedback,user } from '../Models/Data.model';
import { catchError, filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  

  private handleError(errorResponse : HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Client Side Error: ',errorResponse.error.message);
    }
    else{
      console.error('Server Side Error: ',errorResponse);
    }
    return throwError('There is a error with service');
  }

  getUser(): Observable<user[]>{
    return this.http.get<user[]>(environment.apiUrl+'/user').pipe(catchError(this.handleError));
  }

  getProjects() : Observable<project>{
    return this.http.get<project>(environment.apiUrl + '/projects').pipe(catchError(this.handleError));
  }

  getInterns() : Observable<intern>{
    return this.http.get<intern>(environment.apiUrl + '/interns').pipe(catchError(this.handleError));
  }

  createNewProject(newProject:project) : Observable<project>{
    return this.http.post<project>(environment.apiUrl + '/projects',newProject,{
      headers: new HttpHeaders({
        'Content-Type' : 'application/json' 
      })
    })
    .pipe(catchError(this.handleError));
  }

  createNewIntern(newIntern:intern) : Observable<intern>{
    return this.http.post<intern>(environment.apiUrl + '/interns',newIntern,{
      headers: new HttpHeaders({
        'Content-Type' : 'application/json' 
      })
    })
    .pipe(catchError(this.handleError));
  }

  submitFeedback(newFeedback:feedback):Observable<feedback>{
    return this.http.post<feedback>(environment.apiUrl + '/feedback',newFeedback,{
      headers: new HttpHeaders({
        'Content-Type' : 'application/json' 
      })
  })
  .pipe(catchError(this.handleError))
  }

  getFeedback():Observable<feedback[]>{
    return this.http.get<feedback[]>(environment.apiUrl + '/feedback').pipe(catchError(this.handleError));
  }
}
