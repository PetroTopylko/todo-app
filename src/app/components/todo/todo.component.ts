import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Todo[] = [
  {id: 'id12345', name: 'testName 1', description: 'testDescription 1', createdAt: '23.05.2020', editedAt: '24.05.2020'},
  {id: 'id12346', name: 'testName 2', description: 'testDescription 2', createdAt: '24.05.2020', editedAt: '25.05.2020'},
  {id: 'id12347', name: 'testName 3', description: 'testDescription 3', createdAt: '25.05.2020', editedAt: '26.05.2020'},
  {id: 'id12348', name: 'testName 4', description: 'testDescription 4', createdAt: '26.05.2020', editedAt: '27.05.2020'},
  {id: 'id12349', name: 'testName 5', description: 'testDescription 5', createdAt: '27.05.2020', editedAt: '28.05.2020'}
];

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {

  displayedColumns: string[] = ['sequenceNumber', 'name', 'createdAt', 'editedAt', 'editDelete'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
