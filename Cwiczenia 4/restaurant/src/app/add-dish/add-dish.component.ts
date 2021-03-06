import { Component, OnInit } from '@angular/core';
import { Dish } from '../dish';
import { DishesListService } from "../dishes-list-service/dishes-list.service";
import { FilterService } from "../filter-service/filter.service";
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
  dishes : Dish[] = this.dishService.dishes;
  dishForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), this.duplicateNameValidator.bind(this)]],
    cuisine: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    type: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    category: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    ingredients: this.formBuilder.array([this.formBuilder.control('')]),
    maxAmount: [0, [Validators.required, Validators.min(0)]],
    price: [0, [Validators.required, Validators.min(0), Validators.max(50)]],
    description: ['', [Validators.required]],
    photos: this.formBuilder.array([this.formBuilder.control('')])
  });

  constructor(public formBuilder: FormBuilder, public dishService: DishesListService,
    public filterService: FilterService
  ) {}

  ngOnInit(): void {
  }

  duplicateNameValidator(control: FormControl) {
    let name = control.value;
    if (name && this.dishes.map(dish => dish.name).includes(name)) {
      return {
        duplicateName : {
          name: name
        }
      };
    }
    return null;
  }

  get ingredients() {
    return this.dishForm.get('ingredients') as FormArray;
  }

  get photos() {
    return this.dishForm.get('photos') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.formBuilder.control(''));
  }

  addPhoto() {
    this.photos.push(this.formBuilder.control(''));
  }

  addDish(dish: any) {
    const newDish: Dish = {
      id : this.dishes[this.dishes.length - 1].id + 1,
      name: dish.name,
      cuisine: dish.cuisine,
      type: dish.type,
      category: dish.category,
      ingredients: dish.ingredients,
      maxAmount: dish.maxAmount,
      ordered: 0,
      price: dish.price,
      description: dish.description,
      photos: dish.photos,
      rating: 0,
      ratings: []
    };
    this.dishService.addDish(newDish);
  }

  onSubmit() {
    this.addDish(this.dishForm.value);
    this.dishForm.reset();
    this.filterService.update();
  }
}
