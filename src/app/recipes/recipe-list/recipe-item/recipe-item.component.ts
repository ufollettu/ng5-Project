import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe; // bind property from recipe-list component
  @Input() index: number;  // bind property from recipe-list component

  constructor() { }

  ngOnInit() {
  }


}
