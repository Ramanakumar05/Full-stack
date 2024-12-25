import {NextResponse} from 'next/server'

export function middleware(request)
{
    console.log("middleware running")

    // redirect the user
    console.log(request.nextUrl.pathname)
    if(request.nextUrl.pathname!=='login')
    {
        console.log("not equal to login")
    }


    return NextResponse.redirect(new URL('login',request.url))

    // return NextResponse.json({success:"sucessfull "})
}


// direction

export const config={
    matcher:['/user/:path*']
}