// function greetUser(user:{firstname:string,lastName:string})
// {
//     return `Hello ${user.firstname} ${user.lastName}`
// }
function greetUser(user) {
    return "Hello ".concat(user.firstname, " ").concat(user.lastName, " Middle Name ").concat(user.middleName);
}
function loguserdetails(user) {
    console.log("User: ".concat(user.firstname, " ").concat(user.lastName, " ").concat(user.age, " Middle Name ").concat(user.middleName));
}
var user1 = {
    firstname: "Jhon",
    lastName: "doe",
    age: 10,
    middleName: "RK"
};
console.log(greetUser(user1));
loguserdetails(user1);
