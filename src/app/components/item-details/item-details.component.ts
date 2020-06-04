import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item.model';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less']
})
export class ItemDetailsComponent implements OnInit {

  @Input() item: TodoItem;

  constructor() { }

  ngOnInit() {
  }

  onEditItem() {
    console.log("edit item");
  }

  onDeleteItem() {
    console.log("delete item");
  }

}
