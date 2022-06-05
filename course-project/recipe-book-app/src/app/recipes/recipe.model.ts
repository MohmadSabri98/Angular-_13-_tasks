import { Ingredient } from "../shared/ingredient.model";

export class Recipe{
public name:any;
public description:any;
public imagepath:any;
public ingradients:Ingredient[] =[];
constructor(name:string,des:string,impath:string,ingradients:Ingredient[]){
    this.description=des;
    this.imagepath=impath;
    this.name=name;
    this.ingradients=ingradients;

}

}
