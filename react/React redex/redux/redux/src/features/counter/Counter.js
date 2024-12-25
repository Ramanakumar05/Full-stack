import React, { useState } from 'react'


import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementbyamount } from './counterSlice'


export const Counter = () => {
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()

  // for incrementing the given amount
  const [incrementamount,setincrementamount]=useState(0);

  // if user given the string it will consider as 0

  // The Number object in JavaScript includes constants and methods for working with numbers. It can also be used to convert other data types to numbers using the Number() function. If the value cannot be converted, it returns NaN (Not a Number)

  
  const addvalue=Number(incrementamount)||0;

  console.log(incrementamount)


  // reset
  const resetAll=()=>
  {
    setincrementamount(0)
    // in Counterslice
    dispatch(reset())
  }
  return (

    <section>
        <p>{count}</p>
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
        <div>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
        <div>
          <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>

        <input type="text" value={incrementamount} onChange={(e)=>setincrementamount(e.target.value)} />
        

        <div>
          <button onClick={()=>dispatch(incrementbyamount(addvalue))}>Add custom value</button>
        </div>

    </section>
  )
}
