import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { PostsComponent } from './posts/posts.component';
import { PhotoComponent } from './photo/photo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddPostComponent } from './add-post/add-post.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PhotosComponent,
    PostsComponent,
    PhotoComponent,
    PageNotFoundComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
