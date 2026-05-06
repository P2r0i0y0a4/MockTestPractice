import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface user{
  id:number;
  name:string;
  email?:string;
}
@Injectable({
  providedIn: 'root'
})

export class ServicePracticeService {

  private http = inject(HttpClient);
  private url='http://jsonplaceholder.typicode.com/users';

  getAllUsers():Observable<user[]>{
    return this.http.get<user[]>(this.url);
  }

  getUserById(id:number):Observable<user>{
    return this.http.get<user>(`${this.url}/${id}`);
  }

  addUser(user:user):Observable<user>{
    return this.http.post<user>(this.url,user);
  }


  updateUser(id: number, user: user): Observable<user> {
  return this.http.put<user>(`${this.url}/${id}`, user);
}

deleteUser(id: number): Observable<void> {
  return this.http.delete<void>(`${this.url}/${id}`);
}
}
