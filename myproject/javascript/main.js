"use strict";
exports.__esModule = true;
var calc1_1 = require("./calc1");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.prototype.disp = function () {
        console.log("disp");
    };
    return Main;
}());
var c1 = new calc1_1.Cat();
c1.eat(4);
var m = new Main();
m.disp();
