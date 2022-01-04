import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";
import {PhotosComponent} from "./photos/photos.component";
import {PhotoComponent} from "./photo/photo.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'photo/:id', component: PhotoComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
