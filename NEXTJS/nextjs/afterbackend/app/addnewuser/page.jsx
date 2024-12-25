'use client'

import React, { useState } from 'react'

function Addnewuser() {
    const [name,setname]=useState(" ")
    const [age,setage]=useState(" ")
    const [gmail,setgmail]=useState(" ")

    async function SubmitEvent()
    {
        let response=await fetch('http://localhost:3000/api/users',{
            method:'POST',
            headers:
            {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,age,gmail})
    })
    response=await response.json()
    console.log(response)
   
}
  return (

    <div>
        <input type="text" onChange={e=>setname(e.target.value)} value={name}/>
<br />
        <input type="number" onChange={e=>setage(e.target.value)} value={age}/>
<br />
        <input type="text" onChange={e=>setgmail(e.target.value)} value={gmail}/>
        <br />
        
        <button onClick={SubmitEvent}>submit</button>
    </div>
  )
}

export default Addnewuser