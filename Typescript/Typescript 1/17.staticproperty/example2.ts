class Ex3_User{
    name:String
    static totalCount=0

    constructor(name:string)
    {
        this.name=name
        Ex3_User.totalCount++
    }

    getName()
    {
        return this.name
    }

    static getTotal()
    {
        return this.totalCount
    }
}

console.log(Ex3_User.getTotal())