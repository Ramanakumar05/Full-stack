// with class
var User = /** @class */ (function () {
    function User(FirstName, LastName, age) {
        this.firstName = FirstName;
        this.lastName = LastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello ".concat(this.firstName, " ").concat(this.lastName);
    };
    User.prototype.getage = function () {
        return "".concat(this.age);
    };
    return User;
}());
// creating instance
var employee1 = new User("Jhon", "Doe", 25);
var employee2 = new User("Ramana", "Kumar", 18);
console.log(employee1.greet());
console.log(employee1.getage());
// for employee 2
console.log(employee2.greet());
console.log(employee2.getage());
