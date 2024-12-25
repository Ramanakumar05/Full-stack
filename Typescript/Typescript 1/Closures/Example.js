// objective is aviod the confilict between global values
function createCounter() {
    var counter = 0;
    return {
        increment: function () {
            counter++;
        },
        decrement: function () {
            counter--;
        },
        Getvalue: function () {
            return counter;
        }
    };
}
var counter1 = createCounter();
counter1.increment();
console.log(counter1.Getvalue());
