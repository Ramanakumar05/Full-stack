const fs=require('fs')
const axios=require('axios')

// three type

// Method 1 Callbacks
function logging()
{
    console.log("running")
}

setTimeout(logging, 3000);
// End execute first 
console.log("END")

// Why?
// setTimeout() is asynchronous.

// It sends the function to the browser timer.

// JavaScript continues — doesn’t wait (i.e., non-blocking).

// After 2 seconds, callback goes into the event queue and runs.



// Method 2 Promises

const MyPromises =new Promise((resolve,reject)=>
{
    const number=Math.floor(Math.random()*2);
    if(number==0)
    {
        resolve();
    }
    else{
        reject()
    }
})
MyPromises.then(()=>
{
    console.log("Success")
}).catch(()=>
{
    console.log("Failure")
})


axios.get().then(()=>
{
    console.log("Success")
}).catch(()=>
{
    console.log("Failure")
})


// Method 3 async and await

async function fetch() {
    try{
        const response = await axios.get('');
        console.log(response.data);
    }
    catch(error)
    {
        console.error(error)
    }
}


fetch()