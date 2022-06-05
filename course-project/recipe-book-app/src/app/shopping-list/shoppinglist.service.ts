import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingradientchanged=new EventEmitter<Ingredient[]>();
 private   ingredients:Ingredient [] =[new Ingredient('Apples',5),new Ingredient('Tomatos',10)];
 getgredients(){
     return this.ingredients.slice();
 }
 addgradient(next_gradient:Ingredient){
    this.ingredients.push(next_gradient);
    this.ingradientchanged.emit(this.ingredients.slice()); 
    
}
add_Ingradients(ingradients:Ingredient[]){

/*    for(let ingradient of ingradients){
    this.addgradient(ingradient)
}
*/
this.ingredients.push(...ingradients);
this.ingradientchanged.emit(this.ingredients.slice()); 
}



}