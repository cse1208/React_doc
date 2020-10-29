import React from 'react'

function FunctionClick() {
    //function clickHandler(){}
    //ES6 Arrow Funtion
     const clickHandler=()=>{
        console.log("Button Clicked")  
    }
    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick 