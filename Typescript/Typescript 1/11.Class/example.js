// without class
var user1 = { firstName: "Jhon", lastName: "doe", age: 10 };
var user2 = { firstName: "Jhon1", lastName: "doe", age: 10 };
function greetUser(user) {
    return "Hello ".concat(user.firstName, " ").concat(user.lastName);
}
function getUserAge(user) {
    return user.age;
}
console.log(greetUser(user1));
console.log(getUserAge(user1));
// with class in example2.ts
