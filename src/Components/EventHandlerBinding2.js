import React, { Component } from 'react'

 class EventHandlerBinding2 extends Component {
    constructor(){
        super()
        this.state={
            message: "Hello There!"
        }
        this.toggleChange=this.toggleChange.bind(this);
    }
    toggleChange=()=>{
        this.setState({
            message: "Myself Priyanshu"
        })
    };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.toggleChange}>Click 2</button> {/*This approach is better than EventHandlerBinding1 */}
      </div>
    )
  }
}

export default EventHandlerBinding2