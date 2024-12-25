// for =num stack
var numstac = /** @class */ (function () {
    function numstac() {
        this.item = [];
    }
    numstac.prototype.push = function (item) {
        this.item.push(item);
    };
    numstac.prototype.pop = function () {
        this.item.pop();
    };
    numstac.prototype.get = function () {
        return this.item;
    };
    return numstac;
}());
// for string stack
var strst = /** @class */ (function () {
    function strst() {
        this.item = [];
    }
    strst.prototype.push = function (item) {
        this.item.push();
    };
    strst.prototype.pop = function () {
        this.item.pop();
    };
    return strst;
}());
var numberstack = new numstac();
numberstack.push(100);
console.log(numberstack.get());
