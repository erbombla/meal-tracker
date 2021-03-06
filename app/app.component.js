"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.currentMeal = 'Breakfast';
        this.currentTime = new Date();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
        this.selectedMeal = null;
        this.masterMeals = [];
    }
    AppComponent.prototype.editMeal = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.masterMeals.push(newMealFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container-fluid\">\n    <div class=\"jumbotron\">\n      <h1>Meal Tracker</h1>\n      <p class=\"lead\">\n        Log foods you have eaten each day\n      </p>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <h4>{{currentMeal}}</h4>\n            <h5 class=\"text-muted\">{{month}}/{{day}}/{{year}}</h5>\n              <meal-list [childMeals]=\"masterMeals\" (clickSender)=\"editMeal($event)\"></meal-list>\n          </div>\n        </div>\n        <edit-meal [childSelectedMeal]=\"selectedMeal\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-meal>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 col-md-offset-4\">\n        <new-meal (newMealSender)=\"addMeal($event)\"></new-meal>\n      </div>\n    </div>\n    <hr>\n    <footer>\n      <p>2017 &#169; By Eric Bomblatus / An Epicodus Project</p>\n    </footer>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map