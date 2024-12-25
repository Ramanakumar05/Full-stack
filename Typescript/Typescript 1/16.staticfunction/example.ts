class ex{
    name:string;
    age:number
    constructor(name:string,age:number)
    {
        this.name=name;
        this.age=age
    }
    static getName(name:string){
        return name
    }
}

console.log(ex.getName("ramana"))