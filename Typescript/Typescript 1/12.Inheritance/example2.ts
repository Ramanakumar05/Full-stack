class Person{
    firstname:string;
    lastname:string;
    age:number

    constructor(firstname:string,lastname:string,age:number)
    {
        this.firstname=firstname
        this.lastname=lastname
        this.age=age
    }

    greet()
    {
        return `Hello i am ${this.firstname} ${this.lastname}`
    }
    getage()
    {
        return `${this.age}`
    }
}


class user extends Person{

    constructor(firstname:string,lastname:string,age:number)
    {
        // super call the person consturctor
        super(firstname,lastname,age);
    }

}


class admin extends Person
{
    role:string
    constructor(firstname,lastname,age,role:string)
    {
        super(firstname,lastname,age)
        this.role=role
    }
    Admingreet()
    {
        console.log(`hi iam admin role ${role} welcome mr ${firstName}`)
    }
}


const firstName="ramana"
const lastName="kumar"
const age=18
const role="admin"


const obj=new admin(firstName,lastName,age,role)

obj.Admingreet();