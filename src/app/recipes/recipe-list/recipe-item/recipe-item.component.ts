import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe; // from recipe-list component
  // @Output() recipeSelected = new EventEmitter<void>(); // void: contain no information

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    // this.recipeSelected.emit() // set an event to export
    this.recipeService.recipeSelected.emit(this.recipe); // using service to cross-component communication
  }

}
