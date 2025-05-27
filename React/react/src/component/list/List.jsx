import { element } from 'prop-types'
import React from 'react'
import "./List.css"
export const List = () => {
    const carList=[
        {brand:"BMW",color:"Red"},
        {brand:"Ford",color:"blue"}
    ]
    return (
        <div>
            <ul>
                {carList.map((element,index)=>
                {
                    return <li key={index}>
                        Brand:{element.brand}, <br />Color:{element.color}
                    </li>

                    
                })}
            </ul>
        </div>
    )
}
