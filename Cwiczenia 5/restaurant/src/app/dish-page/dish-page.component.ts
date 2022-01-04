import { Component, OnInit } from '@angular/core';
import {Dish} from "../dish";
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";
import {DatabaseService} from "../database-service/database.service";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";
import { FilterService } from "../filter-service/filter.service";
import {FilterPipe} from "../filter-pipe/filter.pipe";

@Component({
  selector: 'app-dish-page',
  templateUrl: './dish-page.component.html',
  styleUrls: ['./dish-page.component.css']
})
export class DishPageComponent implements OnInit {
  filterPipe = new FilterPipe;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  dish: any;
  photo = 0;
  stars = [1, 2, 3, 4, 5];
  rated = false;
  rating = 0;


  constructor(public cartCurrencyService: CartCurrencyService, public dbService: DatabaseService,
              public route: ActivatedRoute, public filterService: FilterService) { }

  ngOnInit(): void {
    this.dbService.dishes.subscribe(e => {
      this.route.paramMap.subscribe(parameters => {
        this.dish = e.filter((dish: { id: string | null; }) => dish.id == parameters.get('id'))[0];
      })
    })
  }

  prevPhoto() {
    this.photo == 0 ? this.photo = this.dish.photos.length - 1 : this.photo--;
  }

  nextPhoto() {
    this.photo == this.dish.photos.length - 1 ? this.photo = 0 : this.photo++;
  }

  available(dish: Dish): number {
    return dish.maxAmount - dish.ordered;
  }

  canAddToCart(dish: Dish): boolean {
    return this.available(dish) > 0;
  }

  addRating(dish:Dish, star: number) {
    if (!this.rated) {
      this.dbService.addRating(this.dish, star);
      this.rated = true;
      this.rating = star;
    }
  }
}
