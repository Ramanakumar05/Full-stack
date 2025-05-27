import React, {useState,createContext } from 'react'
import "./style.css"
import ComponentB from './ComponentB'
import ComponentC from './ComponentC';

export const UserContext =createContext();

function ComponentA() {

    const[user,setuser]=new useState("Ramana")
    const useinfo={
        user,
        setuser
    }
    return (
        <div className='box'>
            <h1>{`Componenet A hello ${user}`}</h1>
            {/* using Props */}
            {/* <ComponentB user={user}/> */}

            {/* using usecontext */}
            <UserContext.Provider value={user}>
                <ComponentB user={user}/>
            </UserContext.Provider>

            <UserContext.Provider value={useinfo}>
                <ComponentC userinfo={useinfo}/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA