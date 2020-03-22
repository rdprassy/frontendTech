var Bank = /** @class */ (function () {
    function Bank() {
        this.amount = 1000;
    }
    Bank.prototype.withdraw = function (amount) {
        var amt1 = amount;
        if (this.amount >= amt1) {
            document.getElementById("abc").innerHTML = amt1 + " amount withdrawn successfully";
            this.amount -= amt1;
        }
        else {
            document.getElementById("abc").innerHTML = "Insufficient amount";
        }
    };
    Bank.prototype.balance = function () {
        document.getElementById("abc").innerHTML = "Balance is " + this.amount;
    };
    return Bank;
}());
var d2 = new Bank();
