var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello i am ".concat(this.firstname, " ").concat(this.lastname);
    };
    Person.prototype.getage = function () {
        return "".concat(this.age);
    };
    return Person;
}());
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user(firstname, lastname, age) {
        // super call the person consturctor
        return _super.call(this, firstname, lastname, age) || this;
    }
    return user;
}(Person));
var admin = /** @class */ (function (_super) {
    __extends(admin, _super);
    function admin(firstname, lastname, age, role) {
        var _this = _super.call(this, firstname, lastname, age) || this;
        _this.role = role;
        return _this;
    }
    admin.prototype.Admingreet = function () {
        console.log("hi iam admin role ".concat(role, " welcome mr ").concat(firstName));
    };
    return admin;
}(Person));
var firstName = "ramana";
var lastName = "kumar";
var age = 18;
var role = "admin";
var obj = new admin(firstName, lastName, age, role);
obj.Admingreet();
