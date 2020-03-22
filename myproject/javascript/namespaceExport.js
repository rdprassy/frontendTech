"use strict";
exports.__esModule = true;
var Company;
(function (Company) {
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Employee.prototype.getType = function () {
            console.log("I am an Employee");
        };
        return Employee;
    }());
    Company.Employee = Employee;
    var Manager = /** @class */ (function () {
        function Manager() {
        }
        Manager.prototype.getType = function () {
            console.log("I am a Manager");
        };
        return Manager;
    }());
    Company.Manager = Manager;
})(Company = exports.Company || (exports.Company = {}));
