import React, { useState } from 'react'
import Item1 from './Item1'
import Item2 from './Item2'


const Interface = () => {
    const [toggled,setToggle]=useState(false)
  return (
    <div>
       <button onClick={()=>{
        setToggle(!toggled)
       }}>Toggle</button>
       
       {/* method 1 */}
       {toggled && <Item1/>}

       {/* method 2 */}

       {toggled ? <Item1/>:<Item2/>}
    </div>
  )
}

export default Interface