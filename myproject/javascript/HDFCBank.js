"use strict";
exports.__esModule = true;
var HDFCBank = /** @class */ (function () {
    function HDFCBank() {
    }
    HDFCBank.prototype.interestRate = function (amount) {
        console.log("Interest rate is " + amount + '%' + " from HDFC bank");
        return amount;
    };
    return HDFCBank;
}());
exports.HDFCBank = HDFCBank;
