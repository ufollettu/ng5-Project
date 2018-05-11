import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListEditComponent} from "./shopping-list-edit/shopping-list-edit.component";

const shoppingListRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent, children: [
    { path: 'edit', component: ShoppingListEditComponent}
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingListRoutes)
  ],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule { }
