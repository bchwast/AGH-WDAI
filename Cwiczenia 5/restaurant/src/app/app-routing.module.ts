import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {DishesListComponent} from "./dishes-list/dishes-list.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AddDishComponent} from "./add-dish/add-dish.component";
import {CartComponent} from "./cart/cart.component";
import {DishPageComponent} from "./dish-page/dish-page.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dishes', component: DishesListComponent},
  {path: 'add', component: AddDishComponent},
  {path: 'cart', component: CartComponent},
  {path: 'dish/:id', component: DishPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
