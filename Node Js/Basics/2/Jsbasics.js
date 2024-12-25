// anonomous function


const sum=function(a,b)
{
    console.log(a+b)
}

sum(10,20)



// arrow function

const multiple=()=>
{
    console.log("arrow function")
}


multiple()


// spread


const hobbies=["ramana","kumar"]
const hobbies1=[...hobbies]
console.log(hobbies1)


// rest 


function addno(...para)
{
    let sum=0;
    para.map((ele)=>{
        sum=sum+ele
    })
    console.log(sum)
}

addno(1,2,3,4)

// promises



let mypromises=new Promise((myResolver,myReject)=>
{
    // on correct execution of fetch or asynch action in js

    // myResolver()


    // on Incorrect execution of fetch or asynch action in js

    setTimeout(()=>
    {
        myReject()
    },2000)
    


})


mypromises.then(()=>{
    console.log("Success")
}).catch(()=>
{
    console.log("Failed")
}).finally(()=>
{
    console.log("finished successfully")
})