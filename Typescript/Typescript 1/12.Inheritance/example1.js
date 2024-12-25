var User = /** @class */ (function () {
    function User(firstName, lastName, age) {
        this.firtname = firstName;
        this.lastname = lastName;
        this.age = age;
    }
    User.prototype.greet = function () {
        return "Hello ".concat(this.firtname, ", ").concat(this.lastname);
    };
    User.prototype.getAge = function () {
        return "".concat(this.age);
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(firstName, lastName, age, role) {
        this.firtname = firstName;
        this.lastname = lastName;
        this.age = age;
        this.role = this.role;
    }
    Admin.prototype.greet = function () {
        return "Hello ".concat(this.firtname, ", ").concat(this.lastname, " ,").concat(this.role, "}");
    };
    Admin.prototype.getAge = function () {
        return "".concat(this.age);
    };
    Admin.prototype.manageuser = function () {
        return "".concat(this.role);
    };
    return Admin;
}());
// let user1=new User("Ramana","kumar",10)
var admin1 = new Admin("Ramana", "Kanan", 10, "kjnl");
// console.log(user1)
console.log(admin1.manageuser());
