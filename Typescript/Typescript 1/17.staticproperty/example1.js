var Ex_user = /** @class */ (function () {
    function Ex_user(name) {
        this.name = name;
    }
    Ex_user.prototype.getname = function () {
        return this.name;
    };
    return Ex_user;
}());
var totalCount = 0;
// function that createuser
function createUser(name) {
    totalCount++;
    return new Ex_user(name);
}
var user1 = createUser("ramana");
var user2 = createUser("moova");
console.log(user1.getname());
console.log(user2.getname());
console.log(totalCount);
