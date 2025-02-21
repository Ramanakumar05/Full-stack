import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

    
    
let [print, setprint] = useState("");
    useEffect(()=>
    {
        axios.get('http://localhost:5000/api/auth/user', {
                    headers: {
                        'Authorization':"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjZjOGRmYjMzYjg0NzMzYjZiM2ExOCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzQwMDMyMjM5LCJleHAiOjE3NDAxMTg2Mzl9.-E1hhojnndJtJrwF9d8BUxY4bls3nEsBd153qLxfvmQ"
                    }
}).then((res)=>{
            console.log(res)
            setprint(res.data.message)
        })
    },[])
  return (
        <>
            <h1>{print}</h1>
        </>
  )
}

export default App