"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var car_1 = require("./car");
var Driver = /** @class */ (function (_super) {
    __extends(Driver, _super);
    function Driver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Driver.prototype.start = function () {
        console.log("Used to start a car");
    };
    Driver.prototype.stop = function () {
        console.log("Used to stop a car");
    };
    Driver.prototype.increaseSpeed = function () {
        console.log("Used to increase speed");
    };
    return Driver;
}(car_1.Car));
var d = new Driver();
d.start();
d.increaseSpeed();
d.stop();
d.brandName();
d.color();
