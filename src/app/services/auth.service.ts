import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  login(login: string, password: string): Observable<boolean> {
    return this.http.post<{access_token: string}>(this.apiURL + '/auth/login', {login: login, password: password})
    .pipe(
      map(result => {
        localStorage.setItem('access_token', result.access_token);
        return true;
      })
    );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login'])
  }

  isAuthorized(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }
}
