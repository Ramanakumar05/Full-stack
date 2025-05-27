import React from 'react'
import Classcom from './component/classcom'
import Fun from './component/fun'
import {Student} from './props/Student'
import Propsinclass from './props/Inclasscom'
import Conditional from './component/ConditionalRender/Conditional'
import { List } from './component/list/List'
import Counter from './component/hooks/useStateEX'
import ExuseEffect from './component/hooks/useEffectEx'
import UseRefExx from './component/hooks/useRefEx'
import ComponentA from './component/hooks/usecontext/ComponentA'
import UsereducerEx from './component/hooks/usereducer/usereducerEx'

function App() {
  const info={
    name:"ramana",
    age:18
  }

  const appleinfo={
    type:"Fuji",
    color:"red"
  }
  return (
    <div>
      <Classcom/>
      <Fun/>
      <h1>Props</h1>
      <Student name="ramana" age={35} married={true}/>
      <Student name="ramana kumar"  married={true}/>
      {/* sending the object in props */}
      <Student obj={info}/>

      {/* props example in class componenet  */}
      <Propsinclass appleinfo={appleinfo} />

      {/* conditional rendering */}
      <Conditional/>

      {/* List */}
      <List/>

      {/* Use State */}
      <Counter/>
      {/* useEffect */}
      <ExuseEffect/>
      {/* useRef */}
      <p>use ref</p>
      <UseRefExx/>

      {/* use context */}
      <ComponentA/>

      {/* use reducer */}
      <UsereducerEx/>
    </div>
  )
}

export default App