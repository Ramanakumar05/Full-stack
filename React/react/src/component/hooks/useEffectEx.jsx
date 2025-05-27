import React from 'react'
import { useState,useEffect } from 'react'
function ExuseEffect() {
    const [count, setCount] = useState(0);
    // Runs one time
    useEffect(()=>
    {
        console.log("component is mounted")
    },[])

    // run when something change
    useEffect(()=>
    {
        console.log("Count changed to", count)
    })
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default ExuseEffect