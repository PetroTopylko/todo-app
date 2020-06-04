import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TodoItemsService } from 'src/app/services/todo-items.service';
import { TodoItem, EditItemDialogData } from 'src/app/models/todo-item.model';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.less']
})
export class ListItemsComponent implements OnInit {

  displayedColumns: string[] = ['sequenceNumber', 'name', 'createdAt', 'editedAt', 'editDelete'];
  dataSource: TodoItem[] = [];

  constructor(
    private server: TodoItemsService,
    public dialog: MatDialog, 
    public router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.server.getItems().subscribe(res => {
      this.dataSource = res;
    });
  }

  getItemDetails(id: string) {
    this.router.navigate(['/item', id]);
  }

  onAddItem() {
    let newItem: EditItemDialogData = {
      name: '',
      description: ''
    };
    const dialogRef = this.dialog.open(
      EditItemComponent, {
        data: newItem
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  onEditItem(item: TodoItem) {
    const dialogRef = this.dialog.open(
      EditItemComponent, {
        data: item
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  onDeleteItem() {
    console.log("delete item");
  }

}
