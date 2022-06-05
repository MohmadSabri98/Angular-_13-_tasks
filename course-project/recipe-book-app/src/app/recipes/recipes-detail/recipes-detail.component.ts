import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  the_item: Recipe={
    name: undefined,
    description: undefined,
    imagepath: undefined,
    ingradients: []
  };
  id:any;
  constructor(private reciperevice:RecipeService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=+params['id'];
    this.the_item=this.reciperevice.getRecipe(+params['id']);
    })
  }
  addtoshoopinglist(){
    this.reciperevice.add_ingradients_to_shopping_list(this.the_item.ingradients);

  }
  oneditrecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route});
    //this.router.navigate(['../',this.id,'edit'],{relativeTo:this.route});
// alternative may on navigation
  }

}
