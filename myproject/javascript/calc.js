var Calc = /** @class */ (function () {
    function Calc() {
    }
    Calc.prototype.add = function (x, y) {
        return (x + y);
    };
    return Calc;
}());
var c = new Calc();
console.log(c.add(22, 33));
