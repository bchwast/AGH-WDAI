import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter: number = 0;
  disable: boolean = false;

  displayCounter(counter: number) {
    this.counter = counter;
    if (this.counter == 10) {
      this.disable = true;
    }
  }

  enable() {
    this.disable = false;
  }

}
