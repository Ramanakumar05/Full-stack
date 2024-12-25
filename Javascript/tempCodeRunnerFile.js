console.log("ramana")


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
