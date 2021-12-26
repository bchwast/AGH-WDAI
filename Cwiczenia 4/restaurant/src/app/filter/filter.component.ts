import {Component, OnInit} from '@angular/core';
import {DishesListService} from "../dishes-list-service/dishes-list.service";
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";
import {FilterService} from "../filter-service/filter.service";
import {LabelType, Options} from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  options: Options = {
    floor: 0,
    ceil: 50,
    step: 0.01,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return 'Min price: ' + this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].symbol + value;
        case LabelType.High:
          return 'Max price: ' + this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].symbol + value;
        default:
          return this.cartCurrencyService.currencies[this.cartCurrencyService.currentCurrency].symbol + value;
      }
    }
  }

  constructor(public dishesListService: DishesListService, public filterService: FilterService,
              public cartCurrencyService: CartCurrencyService) {
  }

  ngOnInit(): void {
  }


}
