import React from 'react'

function NameList() {

    const names=['Bruce','Clark','Diana']
    const nameList=names.map((name,index)=><h2 key={index}>{index}{name}</h2>)
    return (
        <div> { nameList}
            {/* <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1> */}
        </div>
    )
}

export default NameList
