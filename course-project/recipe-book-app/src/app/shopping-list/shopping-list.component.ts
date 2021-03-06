import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient [] =[];
  constructor(private shopinglistservice:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.shopinglistservice.getgredients();
    this.shopinglistservice.ingradientchanged.subscribe((ingrd:Ingredient[])=>{this.ingredients=ingrd;});
  }
}
