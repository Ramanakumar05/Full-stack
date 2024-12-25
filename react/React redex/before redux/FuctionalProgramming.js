function pressLike()
{
    return console.log("thank you");
}

// refer the fuction to the variable 

let refer=pressLike;

refer()


// function that receive another function

function sayhello(fn)
{
    console.log(fn())
}


function fn()
{
    return console.log("saying hello")
}

// refere the function
sayhello(fn)


let input="     subscribe   ";
let output="<div>"+input.trim()+"</div>"

console.log(output)


// same above program in functional programming 
const str="      Ramana      "

const trip= str=>str.trim()

const wrapInDiv=str=>`<div>${str}</div>`

const result=wrapInDiv(trip(str))

console.log(result)