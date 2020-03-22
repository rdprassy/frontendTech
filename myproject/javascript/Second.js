var Dog = /** @class */ (function () {
    function Dog() {
        this.legs = 4;
    }
    Dog.prototype.eat = function () {
        document.getElementById("abc").innerHTML = "<font color='blue' size='22'>Dog eats bones</font>";
    };
    return Dog;
}());
var d = new Dog();
