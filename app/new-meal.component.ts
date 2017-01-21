import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">New Meal</h4>
    </div>
    <div class="panel-body">
      <label>Meal Type (e.g. Lunch, Snack)</label>
        <input #newDescription type="text" class="form-control">
        <br>
      <label>Food</label>
        <input #newFood type="text" class="form-control">
        <br>
      <button (click)="submitForm(newDescription.value, newFood.value); newDescription.value='';" type="button" class="btn btn-default btn-xs">Save</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(description: string, food: string) {
    var newMealToAdd: Meal = new Meal(description, food);
    this.newMealSender.emit(newMealToAdd);
  }
}
