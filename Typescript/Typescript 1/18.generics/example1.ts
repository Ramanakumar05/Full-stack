class Ex_gen<T>
{
    private items:T[]=[]

    push(item:T)
    {
        this.items.push(item)
    }

    pop()
    {
        this.items.pop()
    }

    getElement()
    {
        return this.items;
    }

}


const numberstacks=new Ex_gen<number>
numberstacks.push(100)
console.log(numberstacks.getElement())