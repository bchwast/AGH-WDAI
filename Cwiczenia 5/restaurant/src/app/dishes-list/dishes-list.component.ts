import {Component, OnInit} from '@angular/core';
import {Dish} from '../dish'
import {FilterService} from "../filter-service/filter.service";
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";
import {DatabaseService} from "../database-service/database.service";
import {PaginationService} from "../pagination-service/pagination.service";

@Component({
  selector: 'app-dish-list',
  templateUrl: './dishes-list.component.html',
  styleUrls: ['./dishes-list.component.css']
})
export class DishesListComponent implements OnInit {

  constructor(public filterService: FilterService, public cartCurrencyService: CartCurrencyService,
              public dbService: DatabaseService, public paginationService: PaginationService) {
  }


  ngOnInit(): void {
  }

  available(dish: Dish): number {
    return dish.maxAmount - dish.ordered;
  }

  deleteDish(dish: Dish) {
    this.dbService.removeDish(dish);
    this.cartCurrencyService.deleteFromCart(dish);
    this.filterService.reset();
  }
}
