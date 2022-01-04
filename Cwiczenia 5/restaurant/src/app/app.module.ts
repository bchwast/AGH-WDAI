import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSliderModule } from "@angular-slider/ngx-slider";

import {AngularFireDatabase, AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DishesListComponent } from './dishes-list/dishes-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishComponent } from './dish/dish.component';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DishPageComponent } from './dish-page/dish-page.component';
import { PageComponent } from './page/page.component';
import { DishReviewComponent } from './dish-review/dish-review.component';

@NgModule({
  declarations: [
    AppComponent,
    DishesListComponent,
    AddDishComponent,
    DishComponent,
    FilterPipe,
    FilterComponent,
    CartComponent,
    HomeComponent,
    MenuComponent,
    PageNotFoundComponent,
    DishPageComponent,
    PageComponent,
    DishReviewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        NgxSliderModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
