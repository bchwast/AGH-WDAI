import { Component, OnInit } from '@angular/core';
import { CartCurrencyService } from "../cart-currency-service/cart-currency.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cartCurrencyService: CartCurrencyService) { }

  ngOnInit(): void {
  }

}
