import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoItemsService } from 'src/app/services/todo-items.service';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less']
})
export class ItemDetailsComponent implements OnInit {

  model: TodoItem = {
    id: '',
    name: '',
    description: '',
    createdAt: '',
    editedAt: ''
  };
  itemId: string = '';
  itemIdSub: Subscription;

  constructor(
    private server: TodoItemsService,
    public router: Router,
    public route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.itemIdSub = this.route.params.subscribe(res => {
      this.itemId = res.id;
      this.loadData(this.itemId);
    })
  }

  ngOnDestroy() {
    this.itemIdSub.unsubscribe();
  }

  loadData(id: string) {
    this.server.getItem(id).subscribe(res => {
      this.model = res;
    });
  }

  onBackToItems() {
    this.router.navigate(['/']);
  }

  onEditItem() {
    const dialogRef = this.dialog.open(
      EditItemComponent, {
        data: {
          ...this.model,
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
        this.server.updateItem(res.id, res).subscribe(() => this.loadData(result.id));
      }
    });
  }

  onDeleteItem() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {

      if(result) {
        this.server.deleteItem(result.id).subscribe(() => this.onBackToItems());
      }

      console.log(result);
    });
  }

}
