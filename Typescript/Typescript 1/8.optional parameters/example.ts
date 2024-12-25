// optional argument by ?

var concatefn=function(a:any,b:any,c?:any)
{
    return a+b+c
}

console.log(concatefn("a","b","c"))

// show error
console.log(concatefn("a","b"))


console.log("differnt approach")

var concate=function(a:string,b:string,c?:any)
{
    return a+b+c;
}

console.log(concate("1","2").replace('undefined',''))
