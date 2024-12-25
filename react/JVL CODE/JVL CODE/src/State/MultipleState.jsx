// import React, { useState } from "react";

// function MultipleState()
// {
//     const [color,setcolor]=useState('Red')
//     const [brand,setbrand]=useState('BMW')
//     const [model,setmodel]=useState('S Class')
//     const [year,setyear]=useState('2020')
//     function changeColor()
//     {
//         setcolor('Blue')
//     }
//     return(
//         <>
//             <h1>Scootor</h1>
//             <p>Color:{color}</p>
//             <button onClick={changeColor}>Change color</button>

//             <p>Brand:{brand}</p>
//             <button onClick={()=>
//                 {
//                     setbrand('Tata')
//                 }
//             }>Change Brand</button>
//             <p>Model:{model}</p>
//             <button onClick={()=>
//                 {
//                     setmodel("C Class")
//                 }
//             }>Change model</button>
//             <p>Year:{year}</p>
//             <button onClick={()=>
//                 {
//                     setyear(2024)
//                 }
//             }>Change year</button>
//         </>
        
//     )
// }

// export default MultipleState


// above is method 1

import React, { useState } from "react";
function MultipleState()
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

export default MultipleState;