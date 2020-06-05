import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }  

  public getItems(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.apiURL + '/data')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public getItem(id: string) {
    return this.http.get<TodoItem>(this.apiURL + '/data/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  createItem(data: TodoItem) {
    return this.http.post<TodoItem>(this.apiURL + '/data', JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateItem(id: string, data: TodoItem) {
    return this.http.put<TodoItem>(this.apiURL + '/data/' + id, JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public deleteItem(id: string) {
    return this.http.delete<TodoItem>(this.apiURL + '/data/' + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
