import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('farina', 500),
    new Ingredient('burro', 80),
    new Ingredient('uova', 4)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); // return a copy of the array
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice()); // return a copy of the array
  }

}
