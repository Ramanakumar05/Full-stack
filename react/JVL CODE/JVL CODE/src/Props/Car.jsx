import React from "react";

function Car(props)
{
    const brand=props.brand
    const text=`Hi i am ${brand} car and my color is ${props.color}`
    return(
        <>
        <h1>{`Car Component ${text}`}</h1>
        </>
    )
}

export default Car