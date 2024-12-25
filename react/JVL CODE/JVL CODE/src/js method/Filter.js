// Filter
// creates a new array by filtering out element
// filter method accept an callback function
let no=[1,2,3,4,5,6,7,8]

let evenno=no.filter(isEven)

console.log(evenno)

function isEven(ele)
{
    return ele%2===0;
}

// odd no 

function isodd(ele)
{
    return ele%2!==0
}
let oddno=no.filter(isodd)
console.log(oddno)