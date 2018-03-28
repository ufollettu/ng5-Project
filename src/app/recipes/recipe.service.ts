import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [  //typescript way to use a model as an array
    new Recipe('Pollu cusutu nculu', 'lu pollu', 'https://1.bp.blogspot.com/-ZhUOHZu4qt8/WKiWcAYhkMI/AAAAAAAAB6g/jQFtRRDqacIF4hDeZaasNenJusnPXvfnACLcB/s1600/lu-pollu-cosutu-nculu-checco-zalone.jpg'),
    new Recipe('Nduja', 'Sample recipe description', 'http://www.buongustaidicalabria.it/1086-large_dm/nduja-calabrese-di-spilinga-in-budello-artigianale-l-originale-.jpg'),
    new Recipe('Polenta e Osei', 'Sample recipe description', 'http://www.buonalombardia.regione.lombardia.it/wps/wcm/connect/b711e12d-ea65-495c-8cff-8ad56f66d313/polenta+e+osei.jpg?MOD=AJPERES&CACHEID=b711e12d-ea65-495c-8cff-8ad56f66d313')
  ];

  getRecipes() {
    return this.recipes.slice(); // duplicate the original array
  }

  constructor() { }

}
