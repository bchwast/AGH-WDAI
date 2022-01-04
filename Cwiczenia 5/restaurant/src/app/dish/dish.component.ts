import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Dish} from "../dish";
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";
import {FilterService} from "../filter-service/filter.service";
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {DatabaseService} from "../database-service/database.service";

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  faTrash = faTrash;
  stars = [1, 2, 3, 4, 5];
  @Input() dish!: Dish;
  @Output() deleteDishEvent = new EventEmitter<any>();

  constructor(public cartCurrencyService: CartCurrencyService, public dbService: DatabaseService,
              public filterService: FilterService) {
  }

  ngOnInit(): void {
  }

  available(dish: Dish): number {
    return dish.maxAmount - dish.ordered;
  }

  canAddToCart(dish: Dish): boolean {
    return this.available(dish) > 0;
  }

  deleteDish() {
    this.deleteDishEvent.emit(this.dish);
  }
}
