// with class
class User{
    firstName:string;
    lastName:string;
    age:number

    constructor(FirstName:string,LastName:string,age:number)
    {
        this.firstName=FirstName;
        this.lastName=LastName;
        this.age=age;
    }
    greet()
    {
        return `Hello ${this.firstName} ${this.lastName}`
    }
    getage()
    {
        return `${this.age}`
    }
}

// creating instance

let employee1=new User("Jhon","Doe",25)
let employee2=new User("Ramana","Kumar",18)

console.log(employee1.greet())
console.log(employee1.getage())

// for employee 2

console.log(employee2.greet())
console.log(employee2.getage())