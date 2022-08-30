import React,{useState} from 'react'

function EventHandlerBinding3() {
    const [change, setchange] = useState('Are you there?')
    const toggleChange=()=>{
        setchange(
            'I had arrived here.'
        )
    }
  return (
    <div>
        <h1>{change}</h1>
        <button onClick={toggleChange}>Click to toggle</button>     {/* This is best approach in function based react i.e using state */}
    </div>
  );
}

export default EventHandlerBinding3