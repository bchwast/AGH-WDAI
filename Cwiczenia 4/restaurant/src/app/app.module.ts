import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSliderModule } from "@angular-slider/ngx-slider";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishComponent } from './dish/dish.component';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    AddDishComponent,
    DishComponent,
    FilterPipe,
    FilterComponent,
    CartComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        NgxSliderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
