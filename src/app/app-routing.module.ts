import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { UserAuthGuard } from './core/guards/user-auth.guard';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: '', component: ListItemsComponent, canActivate: [UserAuthGuard] },
  { path: 'item/:id', component: ItemDetailsComponent, canActivate: [UserAuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
