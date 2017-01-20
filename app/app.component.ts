import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container-fluid">
    <h1 class="bg-primary text-center">Meal Tracker</h1>
    <div class="row">
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-body">
            <h4>{{currentMeal}}</h4>
            <h5 class="text-muted">{{month}}/{{day}}/{{year}}</h5>
            <ul>
              <li (click)="isDone(currentMeal)" *ngFor="let currentMeal of meals">
                {{currentMeal.description}}
                <button type="button" class="btn btn-default btn-xs" (click)="editMeal(currentMeal)">Add Details</button>
              </li>
            </ul>
          </div>
        </div>
        <div *ngIf="selectedMeal" class="panel panel-default">
          <div class="panel-heading">
            <h4 class="panel-title">{{selectedMeal.description}}</h4>
          </div>
          <div class="panel-body">
            <label>Enter Calories</label>
              <input [(ngModel)]="selectedMeal.description" type="number" class="form-control">
              <br>
            <label>Enter Details</label>
              <input [(ngModel)]="selectedMeal.description" type="text" class="form-control">
              <br>
            <button type="button" class="btn btn-success btn-xs" (click)="finishedEditing()">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  currentMeal: string = 'Breakfast';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  meals: Meal[] = [
    new Meal('Beef stir fry'),
    new Meal('Breakfast sandwich'),
    new Meal('Coffee with milk')
  ];
  selectedMeal = null;

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null
  }
}
//Property Binding
export class Meal {
  public done: boolean = false;
  constructor(public description: string) { }
}
