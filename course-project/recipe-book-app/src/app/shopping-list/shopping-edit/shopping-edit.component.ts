import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameinput')input_name !:ElementRef ;
  @ViewChild('amountinput')input_amount !:ElementRef ;
  constructor(private slservice:ShoppingListService) { }
grad_demo :Ingredient={
  name: '',
  amount: 0
};
  ngOnInit(): void {
  }
  onAdd_gradient(){
    const amount1=this.input_amount.nativeElement.value;
    const name=this.input_name.nativeElement.value;
    const grad= new Ingredient(name,amount1);
    this.slservice.addgradient(grad);
    console.log( this.grad_demo);
      
  }

}
