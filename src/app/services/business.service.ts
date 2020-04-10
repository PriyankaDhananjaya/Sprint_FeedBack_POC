import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'https://localhost:44362/api/values';
  business: any;

  constructor(private http: HttpClient) { }

  addBusiness(personname, businessname, businessgstnumber) {
    const obj = {
      person_name: personname,
      business_name: businessname,
      business_gst_number: businessgstnumber
    };
    console.log(obj,"hiiiiiiiiiii");
    this.http.post(`${this.uri}/add`, obj)
      .subscribe(res => console.log('Done'));
  }

  getBusiness(): Observable<any> {
    return this.http.get<any>('https://localhost:44362/api/values').pipe(
        map(this.extractData));
  }

  public extractData(res: Response) {
    let body = res;
    return body || { };
  } 
}
