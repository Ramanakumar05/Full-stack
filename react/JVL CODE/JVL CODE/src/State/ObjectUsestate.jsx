import React, { useState } from "react";
function ObjectUseState()
{
    const[scooter,seetScooter]= useState({
        color:"red",
        brand:"BMW",
        model:"C class",
        year:"2020"
    })
    return(
        <>
            <p>{scooter.color}</p>
            <p>{scooter.brand}</p>
            <p>{scooter.model}</p>
            <p>{scooter.year}</p>

            <button onClick={()=>{
                seetScooter((pre)=>
                {
                    return {...pre,color:"blue"}
                })
            }}>Change color</button>
        </>
    )
}

export default ObjectUseState;