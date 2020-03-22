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
var HDFCBank_1 = require("./HDFCBank");
var Customer2 = /** @class */ (function (_super) {
    __extends(Customer2, _super);
    function Customer2() {
        var _this = _super.call(this) || this;
        console.log("As a proud customer of HDFC bank");
        return _this;
    }
    return Customer2;
}(HDFCBank_1.HDFCBank));
exports.Customer2 = Customer2;
var cust2 = new Customer2();
cust2.interestRate(25);
