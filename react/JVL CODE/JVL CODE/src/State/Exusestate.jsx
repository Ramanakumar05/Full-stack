import React, { useState } from "react";

function Exusestate()
{
    const [color,set_color]=useState('Blue')
    function change_color()
    {
        set_color("red")
    }
    return(
        <>
            <h1>From Exusestate component</h1>
            <p>{color}</p>
            <button onClick={change_color}>Change to red</button>
        </>
    )
}


export default Exusestate;