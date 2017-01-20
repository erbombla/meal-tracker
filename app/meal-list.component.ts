import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li (click)="isDone(currentMeal)" *ngFor="let currentMeal of childMeals">
      {{currentMeal.description}}
      <button type="button" class="btn btn-default btn-xs" (click)="editButtonHasBeenClicked(currentMeal)">Add Details</button>
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
