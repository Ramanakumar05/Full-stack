function add(a)
{
    return function(b)
    {
        return a+b;
    }
}

const x=add(3)(4)
console.log(x)


// in arrow function


const add2=a=> b=> a+b;
const y=add2(3)(4)
console.log(y)