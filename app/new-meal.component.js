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
var core_1 = require("@angular/core");
var meal_model_1 = require("./meal.model");
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
    }
    NewMealComponent.prototype.submitForm = function (description, calories, details) {
        var newMealToAdd = new meal_model_1.Meal(description, calories, details);
        this.newMealSender.emit(newMealToAdd);
    };
    return NewMealComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewMealComponent.prototype, "newMealSender", void 0);
NewMealComponent = __decorate([
    core_1.Component({
        selector: 'new-meal',
        template: "\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">New Food</h4>\n    </div>\n    <div class=\"panel-body\">\n      <label>Name</label>\n        <input #description type=\"text\" class=\"form-control\">\n        <br>\n        <label>Calories</label>\n          <input #calories type=\"number\" class=\"form-control\">\n          <br>\n        <label>Details</label>\n          <input #details type=\"text\" class=\"form-control\">\n        <br>\n      <button (click)=\"submitForm(description.value, calories.value, details.value); description.value=''; calories.value=''; details.value='';\" type=\"button\" class=\"btn btn-default btn-xs\">Save</button>\n    </div>\n  </div>\n  "
    })
], NewMealComponent);
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map