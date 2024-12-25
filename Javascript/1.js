// console.log("ramana")


// // hoisting is a behaviour in the javascript where variable and finction declarations are moved to the top of their contaning scope during the compilation

// // means we can use the varible before the declaration 

// // function are fully hoisted 
// // variable are hoisted only their declaration not definition


// // example

// GreetFunction()

// function GreetFunction()
// {
//     console.log("Hello")
// }


// // equality operator 

// console.log("2"==2)

// // strict equality  operatr

// console.log("2"===2)

// // nullish coalescing

// let result=null
// result=result??'Hello'
// console.log(result)


// // length
// // toUpperCase()
// // toLowerCase()
// // charAt()
// // substring(start,end(end next position))
// // indexOf()  get first starting position of the string
// // lastIndexOf() get last starting position of the string
// // replace()
// // split()
// // trim()

// const Hello=()=>
// {
//     console.log("from function")
// }

// Hello()

// function add(a,b)
// {
//     return a+b
// }

// const addresult=add(10,5)
// console.log(addresult)

// // array
// // method 1 

// var arr1=[1,2,3,4]
// var arr2=Array(1,2,3,4)
// console.log(arr1)
// console.log(arr2)


// // unshift  add the element at the index 0
// // pop remove last element
// // shift remove first element
// // indexOf(element) return the first index of the element

// // forEach

// arr1.forEach((e)=>
// {
//     console.log(e+" ramaa"+" "+" ")
// })

// // map

// // map returns the new array where as forEach does not return anything
// arr1.map((element)=>
// {
//     return element
// })

// // activity finding the discounted price

// const price=[2,5,7,16,50,38,100]

// const discountedPrice=price.map((ele)=>
// {
//     return ele-(ele*10)/100;
// })

// console.log(discountedPrice)

// // filter method

// // creates a new array filled with elemeths that pass a test provided by the function

// var outcome=price.filter((number)=>
// {
//     return number>7;
// })
// console.log(outcome)


// var string="ramana"

// if(string.match("ouvnobn"))
// {
//     console.log("ama da")
// }
// else{
//     console.log("no match found")
// }

// let objects=[
//     {name:"ramana",salary:"50000"},
//     {name:"rasiga",salary:"60000"},
//     {name:"kumar",salary:"80000"},
//     {name:"janaka",salary:"20000"},
// ]


// const result1=objects.filter((obj)=>
// {
//     return obj.salary>="21000"
// })

// console.log(result1)


// // find

// const result2=arr1.find((ele)=>
// {
//     return ele>20;
// })
// console.log(result2)


// let person={
//     firstname:"Ramana",
//     lastName:"R",
//     age:27,
//     isstudent:true
// }

// // delect the property form the object

// // delete person.isstudent

// // check the property is presnet in the object

// console.log("firstname" in person)

// // get only the values of the object

// const values=Object.values(person)
// console.log(values)

// // get only the key of the object

// const key=Object.keys(person)
// console.log(key)

// // entries
// // change the object into Array

// const entry=Object.entries(person)
// console.log(entry)

// // freeze fix the values of the property in object

// Object.freeze(person)


// // seal we can change the value but we can't delect  the property of the object

// name="ramanakumar r"
// console.log(name)


// this

// on global scope

console.log(this) // returns the window(global)

function createCharacter(name)
{
    return{
        name,
        greet:function() {
            console.log(`name is ${name}`)
        }
    }
}


// new

function Character(name)
{
    this.name=name
}

const susvs=new Character("ramaan")

console.log(susvs)

// prototype

// object inherites the feature form the another object
// binding the two objects

// 1.object prototype

const person={
    attack:function(){
        console.log("ramana is attacker")
    }
}
const fighter={
    name:"HULK",
    __proto__:person// method 1 of defining the prototype
}


// method 2

// the below method is given by chatgpt as objectGPT
Object.prototype.greet=function()
{
    console.log("greet form the fighter")
}

// all the objects can access the greet because it is added to the Object prototype

// the 

fighter.greet()

fighter.attack()

// 2 constructor function prototype

function Person(name){
    this.name=name;
}

Person.prototype.greet=function()
{
    console.log("hello")
}

const person1=new Person("kumar")
person1.greet()


// class

// class and object define and use

class Car{
    constructor(brand,color)
    {
        this.brand=brand;
        this.color=color;
    }

    describe()
    {
        console.log(`car brand is ${this.brand} and car color is ${this.color}`)
    }
}

const car1=new Car("tata","blue")

car1.describe()


// this and super keyword in the class

class PersonClass{
    constructor(name,age)
    {

        // this refers to the current instance of the class
        this.name=name;
        this.age=age;
    }

    introduce()
    {
        console.log(`person name is ${this.name} and his/her age is ${this.age}`);
    }
}


// inhertance and the super keyword
// super keyword retuens the partent class details
class Animal{
    constructor(name)
    {
        this.name=name;
    }
    describe(){
        console.log("from the Animal class "+this.name);
    }
}

class Dog extends Animal{
    constructor(name,bread)
    {
        super(name)
    }
}

const dog1=new Dog("ramanaKumar","human");
console.log(dog1.describe())


// for in loop

// 1.for in loop in object

let decoration={
    color:'red',
    radius:10
};

for(const prop in decoration)
{
    console.log(prop)//gives the key
    console.log(decoration[prop])//gives the value
}


// 2.for in loop in array

const arr=['hello','i','am',"ramana"]

for(const temp in arr)
{
    console.log(temp)//gives the index
    console.log(arr[temp])// gives the indexed value
}


// error handling 



try
{
    add(10,20)
}
catch(e){
    console.log({name:e.name,message:e.message})
}
finally{
    console.log("completed")
}


// promises

// states   

    // 1>pending
    // 2>fulfilled
    // 3>rejected

    

const promises=new Promise((resolver,reject)=>
{
    setTimeout(()=>
    {
        console.log("set Iimeout");
        resolver("completed")//firethe then block
        reject("not-completed")//fire the catch block
    },5000)
}).then(()=>
{
    console.log("Then")
}).catch(()=>
{
    console.log("catch")
})

