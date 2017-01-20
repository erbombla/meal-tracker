import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
      <p class="lead">
        Log foods you have eaten each day, including details about the meal and its number of calories
      </p>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <h4>{{currentMeal}}</h4>
            <h5 class="text-muted">{{month}}/{{day}}/{{year}}</h5>
              <meal-list></meal-list>
          </div>
        </div>
        <div *ngIf="selectedMeal" class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">{{selectedMeal.description}}</h4>
          </div>
          <div class="panel-body">
            <label>Enter Calories</label>
              <input type="number" class="form-control">
              <br>
            <label>Enter Details</label>
              <input type="text" class="form-control">
              <br>
            <button type="button" class="btn btn-default btn-xs" (click)="finishedEditing()">Save</button>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <footer>
      <p>2017 &#169; By Eric Bomblatus / An Epicodus Project</p>
    </footer>
  </div>
  `
})

export class AppComponent {
  currentMeal: string = 'Breakfast';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null
  }
}
