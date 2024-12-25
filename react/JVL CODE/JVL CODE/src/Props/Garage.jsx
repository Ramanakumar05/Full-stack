import React from "react";
import Car from "./Car";
import Apple from "../components/Exclass";
function Garage()
{
    const color="red"
    return(
        <>
            <h1>I am from Garage Component</h1>
            <Car brand="Ford" color={color}/>
            <Apple/>
        </>
    )
}

export default Garage