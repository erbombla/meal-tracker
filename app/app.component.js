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
        this.currentFocus = 'Epicodus Homework';
        this.currentTime = new Date();
        this.month = this.currentTime.getMonth() + 1;
        this.day = this.currentTime.getDate();
        this.year = this.currentTime.getFullYear();
        // Property Binding
        this.tasks = [
            new Task('Finish code review', 3),
            new Task('Brainstorm JS group projects', 2),
            new Task('Watch Net Ninja Angular 2 tutorials', 1)
        ];
        this.selectedTask = null;
    }
    AppComponent.prototype.editTask = function (clickedTask) {
        this.selectedTask = clickedTask;
    };
    // Property Binding
    AppComponent.prototype.priorityColor = function (currentTask) {
        if (currentTask.priority === 3) {
            return "text-danger";
        }
        else if (currentTask.priority === 2) {
            return "text-warning";
        }
        else {
            return "text-primary";
        }
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedTask = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "\n  <div class=\"container-fluid\">\n    <h1 class=\"bg-primary text-center\">To Do List</h1>\n    <div class=\"row\">\n\n      <div class=\"col-md-4\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <h4>Current Task: {{currentFocus}}</h4>\n            <h5 class=\"text-muted\">{{month}}/{{day}}/{{year}}</h5>\n            <ul>\n              <li [class]=\"priorityColor(currentTask)\" (click)=\"isDone(currentTask)\" *ngFor=\"let currentTask of tasks\">\n                {{currentTask.description}}\n                <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"editTask(currentTask)\">Edit</button>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div *ngIf=\"selectedTask\" class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">Edit Task: {{selectedTask.description}}</h4>\n          </div>\n          <div class=\"panel-body\">\n            <p>Task Status: {{selectedTask.done}}<p>\n            <label>Enter New Description</label>\n              <input [(ngModel)]=\"selectedTask.description\" type=\"text\" class=\"form-control\">\n              <br>\n              <label>Enter Priority</label>\n              <br>\n              <input type=\"radio\" [(ngModel)]=\"selectedTask.priority\" [value]=\"1\"> 1 Low<br>\n              <input type=\"radio\" [(ngModel)]=\"selectedTask.priority\" [value]=\"2\"> 2 Medium<br>\n              <input type=\"radio\" [(ngModel)]=\"selectedTask.priority\" [value]=\"3\"> 3 High<br>\n              <br>\n              <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"finishedEditing()\">Done</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//Property Binding
var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    return Task;
}());
exports.Task = Task;
//# sourceMappingURL=app.component.js.map