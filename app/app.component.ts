import { Component, Input} from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
      <p class="lead">
        Log foods you have eaten each day
      </p>
    </div>
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <h4>{{currentMeal}}</h4>
            <h5 class="text-muted">{{month}}/{{day}}/{{year}}</h5>
              <meal-list [childMeals]="masterMeals" (clickSender)="editMeal($event)"></meal-list>
          </div>
        </div>
        <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <new-meal (newMealSender)="addMeal($event)"></new-meal>
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

  masterMeals: Meal[] = [
    new Meal('Beef stir fry'),
    new Meal('Breakfast sandwich'),
    new Meal('Coffee with milk')
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMeals.push(newMealFromChild);
  }
}
