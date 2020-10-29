import React from 'react'
import './myStyle.css'

function Stylesheet(props){

    let classname= props.primary?'primary':''

    return (

        <div>
            <h2 className={`${classname} font-xl`}>StyleSheets</h2>
        </div>
    )
}

export default Stylesheet;