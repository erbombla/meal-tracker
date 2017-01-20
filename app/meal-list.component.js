"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var meal_model_1 = require("./meal.model");
var MealComponent = (function () {
    function MealComponent() {
        this.meals = [
            new meal_model_1.Meal('Beef stir fry'),
            new meal_model_1.Meal('Breakfast sandwich'),
            new meal_model_1.Meal('Coffee with milk')
        ];
    }
    return MealComponent;
}());
MealComponent = __decorate([
    core_1.Component({
        selector: 'meal-list',
        template: "\n  <ul>\n    <li (click)=\"isDone(currentMeal)\" *ngFor=\"let currentMeal of meals\">\n      {{currentMeal.description}}\n      <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"editMeal(currentMeal)\">Add Details</button>\n    </li>\n  </ul>\n  "
    })
], MealComponent);
exports.MealComponent = MealComponent;
//# sourceMappingURL=meal-list.component.js.map