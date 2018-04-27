import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('farina', 500),
    new Ingredient('burro', 80),
    new Ingredient('uccellini', 8)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice(); // return a copy of the array
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice()); // return a copy of the array
  }

  addIngredients(ingredients: Ingredient[]) {
    let exist: boolean = false;
    // let that = this;
    // debugger;
    // console.log(this.ingredients);
    ingredients.forEach((newIngr, newKey) => {
      exist = false;
      // console.log(newIngr);
      this.ingredients.forEach((ingr, key) => {
        if(ingr["name"] == newIngr["name"]) {
          ingr["amount"] += newIngr["amount"];
          exist = true;
        }
      });

      if(!exist) {
        this.ingredients.push(newIngr);
      }
      // that.ingredientsChanged.emit(that.ingredients.slice());
    });

    // this.ingredients.push(...ingredients); // spread operator
    this.ingredientsChanged.next(this.ingredients.slice()); // return a copy of the array
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice()); // return a copy of the array
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice()); // return a copy of the array

  }
}
