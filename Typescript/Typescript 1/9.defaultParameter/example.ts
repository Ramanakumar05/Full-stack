// default parameter

var concatString=function(a:string,b:string,c:string="default value")
{
    return a+b+c;
}

console.log(concatString("a","b","c"))


console.log(concatString("a ","b "))