var Ex3_User = /** @class */ (function () {
    function Ex3_User(name) {
        this.name = name;
        Ex3_User.totalCount++;
    }
    Ex3_User.prototype.getName = function () {
        return this.name;
    };
    Ex3_User.getTotal = function () {
        return this.totalCount;
    };
    Ex3_User.totalCount = 0;
    return Ex3_User;
}());
console.log(Ex3_User.getTotal());
