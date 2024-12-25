class Ex_user{
    name:string

    constructor(name:string)
    {
        this.name=name
    }

    getname()
    {
        return this.name
    }
}

let totalCount:number=0

// function that createuser

function createUser(name)
{
    totalCount++;
    return new Ex_user(name)
}

const user1=createUser("ramana")
const user2=createUser("moova")


console.log(user1.getname())
console.log(user2.getname())


console.log(totalCount)