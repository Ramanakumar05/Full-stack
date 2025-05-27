import React, { useContext } from 'react'
import ComponentD from './ComponentD'
import { UserContext } from './ComponentA'
function ComponentC() {
  // consumer context
  const value=useContext(UserContext)
  // console.log(value)
  const changeUser = () => {
    value.setuser("ramanakumar");
  };
  // console.log(value.user)
  return (
    <div className='box'>
        <h1>Component C</h1>
      <button onClick={changeUser}>Change Name to "ramanakumar"</button>
        <ComponentD/>
    </div>
  )
}

export default ComponentC