import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TodoItem } from '../models/todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  items: TodoItem[] = [
    {id: 'id12345', name: 'testName 1', description: 'testDescription 1', createdAt: '23.05.2020', editedAt: '24.05.2020'},
    {id: 'id12346', name: 'testName 2', description: 'testDescription 2', createdAt: '24.05.2020', editedAt: '25.05.2020'},
    {id: 'id12347', name: 'testName 3', description: 'testDescription 3', createdAt: '25.05.2020', editedAt: '26.05.2020'},
    {id: 'id12348', name: 'testName 4', description: 'testDescription 4', createdAt: '26.05.2020', editedAt: '27.05.2020'},
    {id: 'id12349', name: 'testName 5', description: 'testDescription 5', createdAt: '27.05.2020', editedAt: '28.05.2020'}
  ];

  constructor() { }

  public getItems(): Observable<TodoItem[]> {
    return of(this.items);
  }

  public getItem(id: string) {
    const item = this.items.find(el => el.id === id);
    return of(item);
  }

  createItem(data: TodoItem) {
    // TODO:
  }

  updateItem(id: string, data: TodoItem) {
    // TODO:
  }

  public deleteItem(id: string) {
    this.items = this.items.filter(el => el.id !== id);
    return of({ action: 'done' });
  }

}
