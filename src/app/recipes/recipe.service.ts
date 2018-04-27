import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [  //typescript way to use a model as an array
    new Recipe(
      'Pollu cusutu nculu',
      'lu pollu',
      'https://1.bp.blogspot.com/-ZhUOHZu4qt8/WKiWcAYhkMI/AAAAAAAAB6g/jQFtRRDqacIF4hDeZaasNenJusnPXvfnACLcB/s1600/lu-pollu-cosutu-nculu-checco-zalone.jpg',
      [
        new Ingredient('pollo', 1),
        new Ingredient('peperoncino', 10)
      ]),
    new Recipe(
      'Nduja',
      'Sample recipe description',
      'http://www.buongustaidicalabria.it/1086-large_dm/nduja-calabrese-di-spilinga-in-budello-artigianale-l-originale-.jpg',
      [
        new Ingredient('porco', 1),
        new Ingredient('peperoncino', 50)
      ]),
    new Recipe(
      'Polenta e Osei',
      'Sample recipe description',
      'http://www.buonalombardia.regione.lombardia.it/wps/wcm/connect/b711e12d-ea65-495c-8cff-8ad56f66d313/polenta+e+osei.jpg?MOD=AJPERES&CACHEID=b711e12d-ea65-495c-8cff-8ad56f66d313',
      [
        new Ingredient('mais', 100),
        new Ingredient('uccellini', 5)
      ])
  ];

  constructor(private slService : ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // duplicate the original array
  }

  getRecipe(index: number) {
    return this.recipes[index]; // find recipe by id
  }

  addIngrsToShList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
