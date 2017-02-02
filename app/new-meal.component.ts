import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">New Food</h4>
    </div>
    <div class="panel-body">
      <label>Name</label>
        <input #description type="text" class="form-control">
        <br>
        <label>Calories</label>
          <input #calories type="number" class="form-control">
          <br>
        <label>Details</label>
          <input #details type="text" class="form-control">
        <br>
      <button (click)="submitForm(description.value, calories.value, details.value); description.value=''; calories.value=''; details.value='';" type="button" class="btn btn-default btn-xs">Save</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(description: string, calories: number, details: string ) {
    var newMealToAdd: Meal = new Meal(description, calories, details);
    this.newMealSender.emit(newMealToAdd);
  }
}
