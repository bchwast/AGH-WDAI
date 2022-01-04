import {Component, HostListener, OnInit} from '@angular/core';
import {CartCurrencyService} from "../cart-currency-service/cart-currency.service";
import {FilterService} from "../filter-service/filter.service";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faCart = faShoppingCart;
  visible = false;
  width: any;

  constructor(public cartCurrencyService: CartCurrencyService, public filterService: FilterService) { }

  ngOnInit(): void {
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }

  menuToggle() {
    this.visible = !this.visible;
  }

}
