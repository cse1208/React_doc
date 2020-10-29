import React,{Component} from 'react'

class Message extends Component{
    constructor(){
        super()

        this.state={
            message:'Welcome visitor'
        }
    }

        changeMessgae(){
            this.setState({
                message:'Thanks for subscribing'
            })
        }

    render(){
        return (
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessgae()}>Subscribe</button>
            </>
        );

    }
}

export default Message