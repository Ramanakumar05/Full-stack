// in the below code we often using the parameter repeatly

// function greetUser (user : { firstname : string , lastName : string })
// {
//     return `Hello ${user.firstname} ${user.lastName}`
// }

// function loguserdetails(user:{firstname:string,lastName:string,age:number}){
//     console.log(`User: ${user.firstname} ${user.lastName} ${user.age}`)
// }

// let user1={
//     firstname:"Jhon",
//     lastName:"doe",
//     age:10
// }
// console.log(greetUser(user1))
// loguserdetails(user1)

// ^^
// || before

// after
// interface is just like an blueprint of parameter
interface User{
    firstname:string
    lastName:string
    age:number
    // middle name is optional
    middleName?:string
}

// we can pass the interface the blue print of the parameter to the function

function greetUser(user:User)
{
    return `Hello ${user.firstname} ${user.lastName} Middle Name ${user.middleName}`
}

function loguserdetails(user:User){
    console.log(`User: ${user.firstname} ${user.lastName} ${user.age} Middle Name ${user.middleName}`)
}

let user1={
    firstname:"Jhon",
    lastName:"doe",
    age:10,
    middleName:"RK"
}
console.log(greetUser(user1))
loguserdetails(user1)