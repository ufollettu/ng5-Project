import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('farina', 500),
    new Ingredient('burro', 80),
    new Ingredient('uova', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

}
