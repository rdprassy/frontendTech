var Dog = /** @class */ (function () {
    function Dog() {
        this.legs = 4;
    }
    Dog.prototype.eat = function () {
        console.log("Dog eats bones");
    };
    return Dog;
}());
var d = new Dog();
d.eat();
console.log("Dog has " + d.legs + " legs");
