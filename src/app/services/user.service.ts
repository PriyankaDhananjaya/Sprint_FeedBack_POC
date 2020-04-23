import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { ResponseData } from '../models/responseData';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    register(user): Observable<any> {
        return this.http.post(`https://localhost:44390/api/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}