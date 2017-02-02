import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li *ngFor="let currentMeal of childMeals">
      {{currentMeal.description}}
      <button type="button" class="btn btn-default btn-xs" (click)="editButtonHasBeenClicked(currentMeal)">Edit Details</button>
      <ul>
        <li>Calories: {{currentMeal.calories}}</li>
        <li>Details: {{currentMeal.mealDetails}}</li>
      </ul>
    </li>

  </ul>
  `
})

export class MealListComponent {
  @Input() childMeals: Meal [];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealtoEdit: Meal) {
    this.clickSender.emit(mealtoEdit);
  }

}
