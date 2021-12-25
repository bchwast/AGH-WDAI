import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish'
import { DishesListService } from "../dishes-list-service/dishes-list.service";
import { FilterService } from "../filter-service/filter.service";
import { FilterPipe } from "../filter-pipe/filter.pipe";
import { CartCurrencyService } from "../cart-currency-service/cart-currency.service";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  constructor(public dishesListService: DishesListService, public filterService: FilterService,
              public cartCurrencyService: CartCurrencyService) {
  }

  // to będzie trzymane w przyszłości na backendzie / w bazie danych
  cart = new Map<number, number>();
  usdCurrency = false;


  ngOnInit(): void {
  }

  available(dish: Dish): number {
    return dish.maxAmount - dish.ordered;
  }


  canAddToCart(dish: Dish): boolean {
    return this.available(dish) > 0;
  }

  addToCart(dish: Dish) {
    this.cart.set(dish.id, (this.cart.get(dish.id) ?? 0) + 1);
    dish.ordered++;
  }

  removeFromCart(dish: Dish) {
    if (this.cart.has(dish.id) && this.available(dish) > 0) {
      this.cart.set(dish.id, this.cart.get(dish.id)! - 1);
      dish.ordered--;
    }
  }

  deleteDish(dish: Dish) {
    this.dishesListService.removeDish(dish);
    this.cartCurrencyService.deleteFromCart(dish);
    this.filterService.reset();
  }

  currencySwitch() {
    this.usdCurrency = !this.usdCurrency;
  }
}
