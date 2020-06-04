import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ListItemsComponent } from './components/list-items/list-items.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { TodoItemsService } from './services/todo-items.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListItemsComponent,
    ItemDetailsComponent,
    EditItemComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents: [
    EditItemComponent,
    ConfirmDialogComponent
  ],
  providers: [
    TodoItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
