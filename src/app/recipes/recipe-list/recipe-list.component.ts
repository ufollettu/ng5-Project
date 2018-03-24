import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [  //typescript way to use a model as an array
    new Recipe('A Recipe title', 'Sample recipe description', 'https://1.bp.blogspot.com/-ZhUOHZu4qt8/WKiWcAYhkMI/AAAAAAAAB6g/jQFtRRDqacIF4hDeZaasNenJusnPXvfnACLcB/s1600/lu-pollu-cosutu-nculu-checco-zalone.jpg'),
    new Recipe('A Recipe title', 'Sample recipe description', 'https://1.bp.blogspot.com/-ZhUOHZu4qt8/WKiWcAYhkMI/AAAAAAAAB6g/jQFtRRDqacIF4hDeZaasNenJusnPXvfnACLcB/s1600/lu-pollu-cosutu-nculu-checco-zalone.jpg'),
    new Recipe('A Recipe title', 'Sample recipe description', 'https://1.bp.blogspot.com/-ZhUOHZu4qt8/WKiWcAYhkMI/AAAAAAAAB6g/jQFtRRDqacIF4hDeZaasNenJusnPXvfnACLcB/s1600/lu-pollu-cosutu-nculu-checco-zalone.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
