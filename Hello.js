import React from 'react'

const Hello=()=>{
    // return(
    //     <div>
    //     <h1>Hello Anshu</h1>
    //     </div>
    // )

    return React.createElement(
    'div',
    {id:'hello',clasName:'dummy'},
    React.createElement('h1',null,'Hello Anshu'))
}

export default Hello