function ram(a)
{
    return function(b)
    {
        return a+b;
    }
}



console.log(ram(10)(5))


// another way using arrow

// const result=(a)=>
//     {
//         (b)=>
//             {
//                 return a+b;
//             }
//     }

// console.log((10)(5))


const fn=a=>b=>a+b;
console.log(fn(0)(0))