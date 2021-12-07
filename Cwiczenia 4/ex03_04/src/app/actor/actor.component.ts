import { Component, OnInit } from '@angular/core';
import { Actor } from "../actor";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  actor: Actor = {
    firstName: "Benedict",
    lastName: "Cumberbatch",
    movie: "Sherlock Holmes"
  };

  window = window.location.href;
  a = 2 + 3;

  constructor() { }

  ngOnInit(): void {
  }

}
