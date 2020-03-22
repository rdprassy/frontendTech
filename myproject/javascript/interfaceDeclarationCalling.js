"use strict";
exports.__esModule = true;
var Peacock = /** @class */ (function () {
    function Peacock() {
    }
    Peacock.prototype.eat = function () {
        console.log("Eats Flowers");
    };
    Peacock.prototype.fly = function () {
        console.log("Flies fast");
    };
    return Peacock;
}());
var p = new Peacock();
p.eat();
p.fly();
