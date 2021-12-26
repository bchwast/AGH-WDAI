import {Injectable} from '@angular/core';
import {Dish} from '../dish';
import {DISHES} from '../mock-dish-data';

@Injectable({
  providedIn: 'root'
})

export class DishesListService {
  public dishes: Dish[] = [];
  public mostExpensive: Dish | undefined;
  public leastExpensive: Dish | undefined;

  constructor() {
    this.dishes = DISHES;
    this.mostExpensive = this.getMostExpensive();
    this.leastExpensive = this.getLeastExpensive();
  }

  getDishes(): Dish[] {
    return this.dishes;
  }

  addDish(dish: Dish) {
    DISHES.push(dish);
    this.mostExpensive = this.getMostExpensive();
    this.leastExpensive = this.getLeastExpensive();
  }

  removeDish(dish: Dish): void {
    DISHES.splice(DISHES.indexOf(dish), 1);
    this.mostExpensive = this.getMostExpensive();
    this.leastExpensive = this.getLeastExpensive();
  }

  getMostExpensive(): Dish {
    return this.dishes.sort((dish1, dish2) => dish2.price - dish1.price)[0];
  }

  getLeastExpensive(): Dish {
    return this.dishes.sort((dish1, dish2) => dish1.price - dish2.price)[0];
  }


}
