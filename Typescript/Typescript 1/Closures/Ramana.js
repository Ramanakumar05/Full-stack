function app(actualvalue)
{
    return{
        increment:function (value) {
            return value+actualvalue
        },
        decrement:function (value) {
            return value--
        }
    }
}


const myfunction=app(10)
console.log(myfunction)
console.log(myfunction.increment(1))


// https://copilot.microsoft.com/sl/dH40EchXW6m