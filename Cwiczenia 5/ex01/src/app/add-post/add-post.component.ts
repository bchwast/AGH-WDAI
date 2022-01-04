import { Component, OnInit } from '@angular/core';
import { DataService } from "../data-service/data.service";
import { Post } from "../Post";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  constructor(public data: DataService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  post = this.formBuilder.group({
    userId: [0, [Validators.required, Validators.min(0)]],
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  addPost(post: any) {
    const newPost: Post = {
      id: this.data.posts.map(post => post.id).sort((a, b) => b - a)[0] + 1,
      userId: post.userId,
      title: post.title,
      body: post.body
    };
    this.data.addPost(newPost);
  }

  onSubmit() {
    this.addPost(this.post.value);
    this.post.reset();
  }
}
