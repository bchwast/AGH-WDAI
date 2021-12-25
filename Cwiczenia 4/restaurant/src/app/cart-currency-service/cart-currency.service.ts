import { Injectable } from '@angular/core';
import { Dish } from "../dish";
import { Entry } from "../entry";
import { DishesListService } from "../dishes-list-service/dishes-list.service";

@Injectable({
  providedIn: 'root'
})

export class CartCurrencyService {
  currencies: {[key: string]: {value: number, symbol: string}} =
    {
      'eur': {value: 1, symbol: '€'},
      'usd': {value: 0.8, symbol: '$'}
    };
  currentCurrency = "eur"
  cart: Entry[] = [];
  ordersAmm = 0;

  constructor(public dishesListService: DishesListService) { }

  changeCurrency(curr: any) {
    this.currentCurrency = curr;
  }

  addToCart(dish: Dish) {
    if (this.cart.filter(entry => entry.id == dish.id).length > 0) {
      this.cart.forEach(entry => {
        if (entry.id == dish.id) {
          entry.quantity++
        }
        })
      }
    else {
      this.cart.push({id: dish.id, name: dish.name, quantity: 1});
    }
    dish.ordered++;
    this.getOrdersAmm();
  }

  removeFromCart(dish: Dish) {
    this.cart.forEach(entry => {
      if (entry.id == dish.id) {
        if (entry.quantity > 1) {
          entry.quantity--;
          dish.ordered--;
        }
        else {
          this.cart.splice(this.cart.indexOf({id: dish.id, name: dish.name, quantity: 1}), 1);
          dish.ordered--;
        }
      }
    })
    this.getOrdersAmm();
  }

  deleteFromCart(dish: Dish) {
    let element = this.cart.filter(entry => entry.id == dish.id)[0];
    if (element) {
      this.cart.splice(this.cart.indexOf(element), 1);
    }
  }

  getOrdersAmm() {
    let sum = 0;
    for (let entry of this.cart) {
      sum += entry.quantity;
    }
    this.ordersAmm = sum;
  }

  getOrdersValue() {
    let sum = 0;
    for (let entry of this.cart) {
      sum += entry.quantity * this.dishesListService.dishes.filter(dish => dish.id == entry.id).map(dish => dish.price)[0];
    }
    return sum;
  }

}
