import { Component, OnInit } from '@angular/core';
import { Car, Model } from '../car'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  selectedBrand = null;
  selectedModel = null;
  selectedColor = null;

  public models: Array<Model> = [];
  public colors: Array<string> = [];

  public cars: Car[] = [
    {
      brand: "Audi",
      models: [
        {
          name: "A3",
          colors: ["black", "red", "yellow"]
        },
        {
          name: "A4",
          colors: ["blue", "orange", "green"]
        },
        {
          name: "A6",
          colors: ["pink", "brown", "grey"]
        }
      ],
    },
    {
      brand: "BMW",
      models: [
        {
          name: "1",
          colors: ["black", "white"]
        },
        {
          name: "3",
          colors: ["yellow", "orange"]
        },
        {
          name: "5",
          colors: ["green", "pink", "blue"]
        }
      ]
    },
    {
      brand: "Volvo",
      models: [
        {
          name: "S60",
          colors: ["black"]
        }
      ]
    }
  ]

  changeBrand() {
    this.models = this.cars.find((car: Car) => car.brand == this.selectedBrand)!.models;
    this.selectedModel = null;
    this.selectedColor = null;
  }

  changeModel() {
    this.selectedColor = null;
    this.colors = this.models.find((model: Model) => model.name == this.selectedModel)!.colors;
  }

}

