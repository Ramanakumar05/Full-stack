class ramana
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age
    }
}
const person=new ramana("ramana",0)

console.log(person)


export const v1="ramanakumar"

function print()
{
    console.log(` The name is ${person.name}`)
}
export default ramana;