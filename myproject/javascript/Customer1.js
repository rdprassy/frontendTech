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
var ICICIBank_1 = require("./ICICIBank");
var Customer1 = /** @class */ (function (_super) {
    __extends(Customer1, _super);
    function Customer1() {
        var _this = _super.call(this) || this;
        console.log("As a proud customer of ICICI bank");
        return _this;
    }
    return Customer1;
}(ICICIBank_1.ICICIBank));
exports.Customer1 = Customer1;
var cust1 = new Customer1();
cust1.interestRate(20);
