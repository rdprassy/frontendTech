"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
        this.fname = "";
        this.lname = "";
    }
    Person.prototype.fullname = function () {
        return this.fname + "  " + this.lname;
    };
    return Person;
}());
exports.Person = Person;
