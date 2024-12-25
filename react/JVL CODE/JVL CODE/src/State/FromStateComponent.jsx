import React from 'react'
// 1
import StateInClass from './StateInClass'
// 2
import MultipleState from './MultipleState'
const FromStateComponent = () => {
  return (
    <div>
        <p>FromStateComponent</p>
        <StateInClass/>
        <MultipleState/>
    </div>
  )
}

export default FromStateComponent