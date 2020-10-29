import React, {Component} from 'react'

class EventBind extends Component{

    constructor(props){
        super(props)

        this.state={
            message:'Hello'
        }

        //3rd approach--> this.clickHandler=this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:'goodbye!'
    //     })
    // }

    //4th Approach
    clickHandler=()=>{
        this.setState({
            message:'goodbye!!'
        })
    }
    render(){
        return(
            <div>
                <input type='text' value={this.state.message}></input>
                {/*1st approach <button onClick={this.clickHandler.bind(this)}>Click Event</button> */}
                {/* 2nd Approach <button onClick={()=>this.clickHandler()}>Click Event</button> */}
                <button onClick={this.clickHandler}>Click Event</button>
            </div>
        )
    }
}

export default EventBind