import { Component, OnInit } from '@angular/core';
import { DataService } from "../data-service/data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.getPosts();
  }



}
