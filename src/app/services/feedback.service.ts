import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Feedback } from '../models/feedback';
import { Interns } from '../models/interns';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  getFeedbacks(): Observable<Feedback[]> {
    httpOptions.headers.set('Access-Control-Allow-Origin', '*');
    var feedbacks = this.http.get<Feedback[]>('https://localhost:44390/api/Feedbacks');
    return feedbacks;
  }

  postFeedback(feedback) {
    return this.http.post(`https://localhost:44390/api/Feedbacks`, feedback);
  }

  getInterns(): Observable<Interns[]> {
    return this.http.get<Interns[]>('https://localhost:44390/api/interns');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:44390/api/users/all');
  }


  public extractData(res: Response) {
    let body = res;
    return body || { };
  } 
}
