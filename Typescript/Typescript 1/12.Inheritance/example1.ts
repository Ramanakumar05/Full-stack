class User{
    firtname:string;
    lastname:string;
    age:number
    constructor(firstName:string,lastName:string,age:number)
    {
        this.firtname=firstName;
        this.lastname=lastName;
        this.age=age
    }
    greet()
    {
        return `Hello ${this.firtname}, ${this.lastname}`
    }
    getAge()
    {
        return `${this.age}`
    }
}

class Admin{
    firtname:string;
    lastname:string;
    age:number
    // in admin
    role:string
    // form parent class
    constructor(firstName:string,lastName:string,age:number,role:string)
    {
        this.firtname=firstName;
        this.lastname=lastName;
        this.age=age;
        this.role=this.role;
    }
    greet()
    {
        return `Hello ${this.firtname}, ${this.lastname} ,${this.role}}`;
    }
    getAge()
    {
        return `${this.age}`
    }
    manageuser()
    {
        return `${this.role}`
    }
}

// let user1=new User("Ramana","kumar",10)
let admin1=new Admin("Ramana","Kanan",10,"kjnl")

// console.log(user1)
console.log(admin1.manageuser())