var ex = /** @class */ (function () {
    function ex(name, age) {
        this.name = name;
        this.age = age;
    }
    ex.getName = function (name) {
        return name;
    };
    return ex;
}());
console.log(ex.getName("ramana"));
