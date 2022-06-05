import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl:'./recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
selected_recipe:Recipe={
  name: undefined,
  description: undefined,
  imagepath: undefined,
  ingradients: []
}
showing=false;

  constructor(private recipeService:RecipeService ) { }

  ngOnInit() {
    this.recipeService.recipeselected.subscribe((recipea:Recipe)=>{this.selected_recipe=recipea;


    });

  this.recipeService.showingdetail.subscribe((shows:boolean)=>{this.showing=shows;});

  }

  /*
  showselec(selec_item:Recipe){
    this.selected_recipe=selec_item;
    this.showing=true;
    console.log(this.selected_recipe.description+" "+this.selected_recipe.name);
  }*/

}
