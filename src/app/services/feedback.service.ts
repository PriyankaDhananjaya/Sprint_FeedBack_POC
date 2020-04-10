import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Feedback } from '../models/feedback';

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
    var feedbacks = this.http.get<Feedback[]>('assets/feedback.json');
    return feedbacks;
  }

  public extractData(res: Response) {
    let body = res;
    return body || { };
  } 
}
