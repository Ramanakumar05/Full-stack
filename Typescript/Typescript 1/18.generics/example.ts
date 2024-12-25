// for =num stack

class numstac{
    private item:number[]=[];

    push(item:number)
    {
        this.item.push(item)
    }
    pop()
    {
        this.item.pop()
    }
    get()
    {
        return this.item
    }
}

// for string stack

class strst{
    private item:string[]=[];

    push(item:string)
    {
        this.item.push()
    }
    pop()
    {
        this.item.pop()
    }
}

const numberstack=new numstac()
numberstack.push(100);

console.log(numberstack.get())