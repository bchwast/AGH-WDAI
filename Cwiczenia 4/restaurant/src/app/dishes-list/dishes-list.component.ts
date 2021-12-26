import {Component, OnInit} from '@angular/core';
import {Dish} from '../dish'
import {DishesListService} from "../dishes-list-service/dishes-list.service";
import {FilterService} from "../filter-service/filter.service";
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  constructor(public dishesListService: DishesListService, public filterService: FilterService,
              public cartCurrencyService: CartCurrencyService) {
  }


  ngOnInit(): void {
  }

  available(dish: Dish): number {
    return dish.maxAmount - dish.ordered;
  }

  deleteDish(dish: Dish) {
    this.dishesListService.removeDish(dish);
    this.cartCurrencyService.deleteFromCart(dish);
    this.filterService.reset();
  }
}
