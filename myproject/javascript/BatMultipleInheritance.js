"use strict";
exports.__esModule = true;
var Bat = /** @class */ (function () {
    function Bat() {
    }
    Bat.prototype.eat = function () {
        console.log("Eats Insects");
    };
    Bat.prototype.fly = function () {
        console.log("Flies fast");
    };
    Bat.prototype.run = function () {
        console.log("Runs slowly....");
    };
    return Bat;
}());
var b = new Bat();
b.eat();
b.fly();
b.run();
