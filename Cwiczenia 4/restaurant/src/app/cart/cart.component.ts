import { Component, OnInit } from '@angular/core';
import { DishesListService } from "../dishes-list-service/dishes-list.service";
import { CartCurrencyService } from "../cart-currency-service/cart-currency.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public dishesListService: DishesListService, public cartCurrencyService: CartCurrencyService) { }

  ngOnInit(): void {
  }

}
