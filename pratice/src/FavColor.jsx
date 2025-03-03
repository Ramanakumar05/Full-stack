import React, { useState } from "react";

export const FavColor=(params)=> {

    const [color,SetColor]=useState("red")
    return(
        <>
            <h1>{`fav color ${color}`}</h1>
            <button onClick={()=>{color=="red"? SetColor("Black"):SetColor("red")}}>Change</button>
        </>
        
    )
}