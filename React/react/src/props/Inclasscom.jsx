import React from "react";

class Propsinclass extends React.Component{
    render()
    {
        const {appleinfo}=this.props;
        const {type,color}=appleinfo
        console.log(appleinfo)
        return(
            <>
                <h2>props example(class)</h2>
                <p>{`Apple name is ${type}`}</p>
            </>
        )
    }
}
export default Propsinclass