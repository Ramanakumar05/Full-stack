// optional argument by ?
var concatefn = function (a, b, c) {
    return a + b + c;
};
console.log(concatefn("a", "b", "c"));
// show error
console.log(concatefn("a", "b"));
console.log("hello");
var concate = function (a, b, c) {
    return a + b + c;
};
console.log(concate("1", "2").replace('undefined', ''));
