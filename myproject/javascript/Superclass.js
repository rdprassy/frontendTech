"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal() {
        this.legs = 4;
    }
    Animal.prototype.eat = function () {
        console.log("Eats Veg and Non Veg");
    };
    return Animal;
}());
exports.Animal = Animal;
