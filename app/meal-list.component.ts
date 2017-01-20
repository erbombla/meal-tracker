import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
  <ul>
    <li (click)="isDone(currentMeal)" *ngFor="let currentMeal of meals">
      {{currentMeal.description}}
      <button type="button" class="btn btn-default btn-xs" (click)="editMeal(currentMeal)">Add Details</button>
    </li>
  </ul>
  `
})

export class MealComponent {
  meals: Meal[] = [
    new Meal('Beef stir fry'),
    new Meal('Breakfast sandwich'),
    new Meal('Coffee with milk')
  ];

}
