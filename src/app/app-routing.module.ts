import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [
  { path: '', component: ListItemsComponent },
  { path: 'item/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
