import React from "react";
import InclassCar from "./InclassCar";

class InclassGarage extends React.Component{
    render(){
        const Carinfo={
            name:"Tata",
            color:"Teal"
        }
        return(
            <>
                <h1>From Garage class Component</h1>
                <InclassCar Carinfo={Carinfo}/>
            </>
        )
    }
}

export default InclassGarage