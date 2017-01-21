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
        <input #newFood type="text" class="form-control">
        <br>
      <button (click)="submitForm(newFood.value); newFood.value='';" type="button" class="btn btn-default btn-xs">Save</button>
    </div>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(food: string) {
    var newMealToAdd: Meal = new Meal(food);
    this.newMealSender.emit(newMealToAdd);
  }
}
