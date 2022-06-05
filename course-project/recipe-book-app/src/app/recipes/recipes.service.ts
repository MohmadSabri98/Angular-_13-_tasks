import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipeselected=new EventEmitter<Recipe>();
     showingdetail=new EventEmitter<Boolean>();
     private recipes : Recipe[]=[ new Recipe('Tasty Schnizel'
     ,' A super Tasty Schnizel is awesome '
     ,'https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg'
     ,[
         new Ingredient('Meat',1),
         new Ingredient('French Fries',20)
     ]),
      new Recipe('A Big Fat Burger','What else you need to say ?',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XKW3tXWD337qy-v4yUgGO9qzsS_8_EpBjg&usqp=CAU'
,[
    new Ingredient('Meat',10),
    new Ingredient('Buns',5)
])

];
constructor(private slservice:ShoppingListService){}
getrecipes(){
    return this.recipes.slice();
    //will return a copy of recipes array

}
getRecipe(index:number){
  return this.recipes.slice()[index];
}
add_ingradients_to_shopping_list(ingradient :Ingredient[]){
this.slservice.add_Ingradients(ingradient);
}

}
