  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My favourite actor';
}

let array1: string[] = ["Ala", "ma", "kota"];
let array2: number[] = [0, 1, 2, 3];

function tabliczka(array1: string[], array2: number[]) {
  for (let name of array1) {
    for (let i in array2) {
      console.log(name + i);
    }
  }
}

tabliczka(array1, array2);
