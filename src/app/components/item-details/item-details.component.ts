import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoItemsService } from 'src/app/services/todo-items.service';
import { EditItemComponent } from '../edit-item/edit-item.component';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less']
})
export class ItemDetailsComponent implements OnInit {

  model: TodoItem;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private server: TodoItemsService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    const itemId = this.route.params['value'].id;
    this.loadData(itemId);
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
      console.log(result);
    });
  }

  onDeleteItem() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}
