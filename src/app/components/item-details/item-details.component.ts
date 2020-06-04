import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { TodoItem } from 'src/app/models/todo-item.model';
import { TodoItemsService } from 'src/app/services/todo-items.service';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less']
})
export class ItemDetailsComponent implements OnInit {

  model: TodoItem;

  constructor(
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

  onEditItem() {
    const dialogRef = this.dialog.open(
      EditItemComponent, {
        data: this.model
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
