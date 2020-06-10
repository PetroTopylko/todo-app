import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TodoItemsService } from 'src/app/services/todo-items.service';
import { IdGeneratorService } from 'src/app/services/id-generator.service';
import { TodoItem, EditItemDialogData } from 'src/app/models/todo-item.model';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';

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
    private idGeneratorService: IdGeneratorService,
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
        data: {
          ...newItem,
          isNew: true
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const newItemId = this.idGeneratorService.generateId();
        const res = {
          ...result,
          id: newItemId,
          editedAt: new Date(),
          createdAt: new Date()
        }
        this.server.createItem(res).subscribe(() => this.loadData());
      }
    });
  }

  onEditItem(item: TodoItem) {
    const dialogRef = this.dialog.open(
      EditItemComponent, {
        data: {
          ...item,
          isNew: false
        }
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        const res = {
          ...result,
          editedAt: new Date()
        }
        this.server.updateItem(res.id, res).subscribe(() => this.loadData());
      }
    });
  }

  onDeleteItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.server.deleteItem(id).subscribe(() => this.loadData());
      }
    });
  }

}
