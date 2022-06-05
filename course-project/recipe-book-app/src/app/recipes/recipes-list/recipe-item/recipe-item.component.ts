import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() singleitem:Recipe={
     name: undefined,
     description: undefined,
     imagepath: undefined,
     ingradients: []
   };
 // @Output()selected_item =new EventEmitter<void>();
@Input() id:any;
  // constructor(private recipeservice:RecipeService) { }

  ngOnInit(): void {
  }
  // onselect_item(){
  //   //this.selected_item.emit();
  //   this.recipeservice.recipeselected.emit(this.singleitem);
  //   this.recipeservice.showingdetail.emit(true);
  //   console.log("tem clicked succesully "+this.singleitem.name)
  // }
}
