import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingListEditComponent} from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import {RecipesComponent} from "./recipes/recipes.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {ErrorPageComponent} from "./error-page/error-page.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'shopping-list', component: ShoppingListComponent, children: [
    { path: 'edit', component: ShoppingListEditComponent}
  ]},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: ':id/edit', component: RecipeEditComponent},

  ]},
  // { path: 'not-found', component: PageNotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
