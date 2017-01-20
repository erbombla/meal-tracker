import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal" class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">{{childSelectedMeal.description}}</h4>
      </div>
      <div class="panel-body">
        <label>Enter Calories</label>
          <input type="number" class="form-control">
          <br>
        <label>Enter Details</label>
          <input type="text" class="form-control">
          <br>
        <button type="button" class="btn btn-default btn-xs" (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();
  
  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
