"use strict";
exports.__esModule = true;
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.eat = function (x) {
        if (typeof x == 'string') {
            console.log("Eats " + x);
        }
        else if (typeof x == 'number') {
            console.log("Eats " + x + " rats per day");
        }
        else {
            console.log("Not matching");
        }
    };
    return Cat;
}());
exports.Cat = Cat;
var c1 = new Cat();
c1.eat("rats");
c1.eat(5);
