import {Injectable} from '@angular/core';
import {DishesListService} from "../dishes-list-service/dishes-list.service";
import {Dish} from "../dish";
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";
import {FilterPipe} from "../filter-pipe/filter.pipe";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterPipe = new FilterPipe();
  dishes: Dish[] = [];
  name: string = '';
  cuisines: string[] = [];
  categories: string[] = [];
  ratings: number[] = [];
  minPrice: number = 0;
  maxPrice: number = 0;

  constructor(public dishesListService: DishesListService, public cartCurrencyService : CartCurrencyService) {
    this.dishes = this.dishesListService.dishes;
    this.minPrice = this.getMinPrice();
    this.maxPrice = this.getMaxPrice();
  }

  getAllCuisines() {
    let cuisines = new Set();
    this.dishesListService.dishes.forEach(dish => cuisines.add(dish.cuisine));
    return Array.from(cuisines).sort();
  }

  getAllCategories() {
    let categories = new Set();
    this.dishesListService.dishes.forEach(dish => categories.add(dish.category));
    return Array.from(categories).sort();
  }

  getAllRatings() {
    let ratings = new Set();
    this.dishesListService.dishes.forEach(dish => ratings.add(dish.rating));
    return Array.from(ratings).sort();
  }

  cuisineSwitch(cuisine: any) {
    if (this.cuisines.includes(cuisine)) {
      this.cuisines.splice(this.cuisines.indexOf(cuisine), 1);
    }
    else {
      this.cuisines.push(cuisine);
    }
    this.cuisines = Object.assign([], this.cuisines);
    this.update();
  }

  categorySwitch(category: any) {
    if (this.categories.includes(category)) {
      this.categories.splice(this.categories.indexOf(category), 1);
    }
    else {
      this.categories.push(category);
    }
    this.categories = Object.assign([], this.categories);
    this.update();
  }

  ratingSwitch(rating: any) {
    if (this.ratings.includes(rating)) {
      this.ratings.splice(this.ratings.indexOf(rating), 1);
    }
    else {
      this.ratings.push(rating);
    }
    this.ratings = Object.assign([], this.ratings);
    this.update();
  }

  getMaxPrice() {
    if (this.categories.length == 0 && this.ratings.length == 0 && this.cuisines.length == 0) {
      return this.dishesListService.dishes.map(dish => dish.price).sort((a, b) => b - a)[0] *
        this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].value;
    }
    let ret = this.filterPipe.transform(this.dishesListService.dishes, '', this.cuisines, this.categories, this.ratings,
        0, 50, this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].value).map(dish => dish.price).sort((a, b) => b - a)[0] *
      this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].value;
    if (ret) {
      return ret;
    }
    return 0;
  }

  getMinPrice() {
    if (this.categories.length == 0 && this.ratings.length == 0 && this.cuisines.length == 0) {
      return this.dishesListService.dishes.map(dish => dish.price).sort((a, b) => a - b)[0] *
        this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].value;
    }
    let ret = this.filterPipe.transform(this.dishesListService.dishes, '', this.cuisines, this.categories, this.ratings,
        0, 50, this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].value).map(dish => dish.price).sort((a, b) => a - b)[0] *
      this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].value;
    if (ret) {
      return ret;
    }
    return 0;
  }

  update() {
    this.minPrice = this.getMinPrice();
    this.maxPrice = this.getMaxPrice();
  }

  reset() {
    this.dishes = this.dishesListService.dishes;
    this.name = '';
    this.cuisines = [];
    this.categories = [];
    this.ratings = [];
    this.minPrice = this.getMinPrice();
    this.maxPrice = this.getMaxPrice();
  }

}
