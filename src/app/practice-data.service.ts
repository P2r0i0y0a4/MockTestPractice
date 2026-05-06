import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';

export interface DemoUser {
  id: number;
  name: string;
  email: string;
  role?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PracticeDataService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private readonly usersSubject = new BehaviorSubject<DemoUser[]>([
    { id: 1, name: 'Asha', email: 'asha@example.com', role: 'Admin' },
    { id: 2, name: 'Ravi', email: 'ravi@example.com', role: 'User' },
    { id: 3, name: 'Mina', email: 'mina@example.com', role: 'Editor' }
  ]);

  readonly users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  getStaticUsers(): Observable<DemoUser[]> {
    return of(this.usersSubject.value).pipe(delay(400));
  }

  getUsersFromApi(): Observable<DemoUser[]> {
    return this.http.get<DemoUser[]>(this.apiUrl).pipe(
      tap((users) => this.usersSubject.next(users))
    );
  }

  addUser(user: Omit<DemoUser, 'id'>): Observable<DemoUser> {
    return this.http.post<DemoUser>(this.apiUrl, user);
  }

  deleteLocalUser(id: number): void {
    this.usersSubject.next(this.usersSubject.value.filter((user) => user.id !== id));
  }

  updateLocalUser(updatedUser: DemoUser): void {
    this.usersSubject.next(
      this.usersSubject.value.map((user) => user.id === updatedUser.id ? updatedUser : user)
    );
  }
}
