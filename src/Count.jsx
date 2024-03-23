import React, { useState } from 'react'

function Count() {

const [increment,setIncrement]=useState(0)
const [decrement,setdecrement]=useState(0)

const btn=()=>{
    setIncrement(increment+1)

}

const btns=()=>{
setdecrement(decrement-1)
}

  return (
    <>
    <div className="b">
    <h1 className='blu'  >{increment}</h1>

<br />
    <button className='btn'  onClick={btn} >Increment</button>

    <br /><br />
    
        
    <h1 className='blu' >{decrement}</h1>
<br />

    <button className='btnd'  onClick={btns} >Decrement</button>

    </div>
    
    </>
  )
}

export default Count