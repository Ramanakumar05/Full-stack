import { NextResponse } from "next/server";



export async function POST(req,res) {
    let {name,age}= await req.json()
    // if field is empty
    if(!name || !age)
    {
        console.log("please enter name and age")
        // method 1

        // return new Response('please enter name and age',{status:500})

        // method 2

        return NextResponse.json(
            {error:"please enter name and age"},
            {status:500}
        )
    }

    // validation
    if(age<18)
    {
        return new Response("less than 18",{status:400})
    }
    else{
        console.log(data)
        return NextResponse.json({status:200})
    }
}

