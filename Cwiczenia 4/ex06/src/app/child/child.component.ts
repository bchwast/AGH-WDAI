import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter: number = 0;
  @Input() disable: boolean = false;

  increaseCounter() {
    if (! this.disable) {
      this.counter++;
      this.clicks.emit(this.counter);
    }
  }

  reset() {
    if (this.disable) {
      this.counter = 0;
      this.clicks.emit(this.counter);
      this.enable.emit();
    }
  }

  @Output() clicks: EventEmitter<number> = new EventEmitter<number>();
  @Output() enable: EventEmitter<void> = new EventEmitter<void>();


}
