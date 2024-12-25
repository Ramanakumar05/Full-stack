// objective is aviod the confilict between global values

// also it is encapsulation
function createCounter()
{
    let counter=0;
    return{
        increment:function()
        {
            counter++;
        },
        decrement:function()
        {
            counter--;
        },
        Getvalue:function()
        {
            return counter;
        }
    }
}

const counter1=createCounter();
counter1.increment()
console.log(counter1.Getvalue())


// coumter 2

const counter2=createCounter()
console.log(counter2)