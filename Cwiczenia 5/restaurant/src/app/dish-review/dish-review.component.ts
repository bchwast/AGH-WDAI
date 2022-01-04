import {Component, Input, OnInit} from '@angular/core';
import {Dish} from "../dish";
import {FormBuilder, Validators} from "@angular/forms";
import {DatabaseService} from "../database-service/database.service";

@Component({
  selector: 'app-dish-review',
  templateUrl: './dish-review.component.html',
  styleUrls: ['./dish-review.component.css']
})
export class DishReviewComponent implements OnInit {
  @Input() dish!: Dish;
  review = this.fb.group({
    nick: ['', [Validators.required]],
    name: ['', [Validators.required]],
    text: ['', [Validators.required, Validators.minLength(50), Validators.maxLength(500)]],
    date: ['']
  })

  constructor(public fb: FormBuilder, public dbService: DatabaseService) { }

  ngOnInit(): void {
  }

  submit() {
    this.dish.reviews.push({nick: this.review.value.nick, name: this.review.value.name,
      body: this.review.value.text, date: this.review.value.date});
    this.review.reset();
    this.dbService.addReview(this.dish);
  }
}
