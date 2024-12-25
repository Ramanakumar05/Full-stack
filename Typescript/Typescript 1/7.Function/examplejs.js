function addNumber(a,b)
{
    return a+b;
}

// Integer
var result=addNumber(1,2)
console.log(result)

console.log(typeof result)
// if we pass String
// we get wrong answer(concate the stirng)


var result=addNumber("1","2")
console.log(result)


console.log(typeof result)
// in typescript we can avoid
