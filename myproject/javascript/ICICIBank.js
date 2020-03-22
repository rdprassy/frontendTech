"use strict";
exports.__esModule = true;
var ICICIBank = /** @class */ (function () {
    function ICICIBank() {
    }
    ICICIBank.prototype.interestRate = function (amount) {
        console.log("Interest rate is " + amount + '%' + " from ICICI bank");
        // return amount;
    };
    return ICICIBank;
}());
exports.ICICIBank = ICICIBank;
