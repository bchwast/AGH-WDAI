import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Dish} from "../dish";
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";
import {DishesListService} from "../dishes-list-service/dishes-list.service";
import {faTrash} from '@fortawesome/free-solid-svg-icons'

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

  constructor(public cartCurrencyService: CartCurrencyService, public dishesListService: DishesListService) {
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

  addRating(star: number) {
    this.dish.ratings.push(star);
    this.dish.rating = Math.round(this.dish.ratings.reduce((a, b) => a + b) / this.dish.ratings.length);
  }
}
