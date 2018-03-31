import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('farina', 500),
    new Ingredient('burro', 80),
    new Ingredient('uccellini', 8)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); // return a copy of the array
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice()); // return a copy of the array
  }

  addIngredients(ingredients: Ingredient[]) {

    let exist: boolean = false;
    let that = this;
    // debugger;
    // console.log(this.ingredients);
    ingredients.forEach(function(newIngr, newKey) {
      exist = false;
      // console.log(newIngr);
      that.ingredients.forEach(function (ingr, key) {
        if(ingr["name"] == newIngr["name"]) {
          ingr["amount"] += newIngr["amount"];
          exist = true;
        }
      });

      if(!exist) {
        that.ingredients.push(newIngr);
      }
      that.ingredientsChanged.emit(that.ingredients.slice());
    });



    // this.ingredients.push(...ingredients); // spread operator
    // this.ingredientsChanged.emit(this.ingredients.slice()); // return a copy of the array
  }
}
