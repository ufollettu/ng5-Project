import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShoppingListEditComponent} from './shopping-list-edit/shopping-list-edit.component';
import {ShoppingListComponent} from './shopping-list.component';
import {SharedModule} from '../shared/shared.module';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule,
    SharedModule
  ],
  declarations: [
    ShoppingListComponent,
    ShoppingListEditComponent
  ]
})
export class ShoppingListModule {
}
