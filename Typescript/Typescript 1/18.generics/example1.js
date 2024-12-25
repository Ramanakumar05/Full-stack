var Ex_gen = /** @class */ (function () {
    function Ex_gen() {
        this.items = [];
    }
    Ex_gen.prototype.push = function (item) {
        this.items.push(item);
    };
    Ex_gen.prototype.pop = function () {
        this.items.pop();
    };
    Ex_gen.prototype.getElement = function () {
        return this.items;
    };
    return Ex_gen;
}());
var numberstacks = new Ex_gen;
numberstacks.push(100);
console.log(numberstacks.getElement());
