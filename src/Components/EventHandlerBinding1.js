import { render } from '@testing-library/react'
import React,{Component} from 'react'   
class EventHandlerBinding1 extends Component{
    constructor()
    {
        super()
        this.state={
            message: 'This is Me'
        }
    }
    toggleChange=()=>{
        this.setState({
            message: 'I am Priyanshu'
    })
    }
render(){
    
    return(
    <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.toggleChange()}>Click Me</button>
    </div>
    )
    }
}

export default EventHandlerBinding1