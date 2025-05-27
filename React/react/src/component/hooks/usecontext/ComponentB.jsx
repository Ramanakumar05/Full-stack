import React, { useContext } from 'react'
import ComponentC from './ComponentC'

// comsumer component
import { UserContext } from './ComponentA'

const ComponentB = () => {
    const value=useContext(UserContext)
  return (
    <div className='box'>
        <h1>{`Component B ${value}`}</h1>
        <ComponentC/>
    </div>
  )
}

export default ComponentB