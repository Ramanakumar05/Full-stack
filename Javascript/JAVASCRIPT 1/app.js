// // let map=new Map()

// // map.set("ramana","10")

// // // console.log(map)

// // // will not work
// // // because for in is used to iterate over enumerable properties of an object but a map is not an object

// // // for(key in map)
// // // {
// // //     console.log(key)
// // // }


// // // get keys 

// // for(let keys in map.keys())
// // {
// //     console.log(keys)
// // }


// // // get value 
// // for(let value in map.values())
// // {
// //     console.log(value)
// // }

// // // get value corresponding to the keys

// // for(let key in map.keys()){
// //     console.log(map.get(key))
// // }

// // // get both key and value

// // for(let[key,value] of map)
// // {
// //     console.log(`key ${key} and value is ${value}`)
// // }


// // // using for each

// // map.forEach((key,value)=>
// // {
// //     console.log("from foreach")
// //     console.log(`key ${key} and value ${value}`)
// // })


// // // const object={
// // //     name:"ramana",
// // //     age:18
// // // }

// // // for(key in object)
// // // {
// // //     console.log(key)
// // // }

// // // let arr=[1,2,3,4,5,6,"ramana"]

// // // for(let no of arr)
// // // {
// // //     console.log(no)
// // // }




// const number=[5,2,8,1,3]
// // ascending order
// number.sort((a,b)=>
// {
//     return a-b
// })
// console.log(number)

// // decending order

// number.sort((a,b)=>
// {
//     return b-a
// })

// number.filter((num)=>
// {
//     return num>5
// })



const arr=[1,2,3,4,5,6,7]

function check(...arr)
{
    
}