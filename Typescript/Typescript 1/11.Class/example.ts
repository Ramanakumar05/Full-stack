// without class

let user1={firstName:"Jhon",lastName:"doe",age:10}
let user2={firstName:"Jhon1",lastName:"doe",age:10}



function greetUser(user:{firstName:string,lastName:string})
{
    return `Hello ${user.firstName} ${user.lastName}`
}

function getUserAge(user:{age:number})
{
    return user.age
}

console.log(greetUser(user1))
console.log(getUserAge(user1))

// with class in example2.ts