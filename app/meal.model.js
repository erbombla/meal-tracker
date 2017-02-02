"use strict";
var Meal = (function () {
    function Meal(description, calories, mealDetails) {
        this.description = description;
        this.calories = calories;
        this.mealDetails = mealDetails;
        this.done = false;
    }
    return Meal;
}());
exports.Meal = Meal;
//# sourceMappingURL=meal.model.js.map