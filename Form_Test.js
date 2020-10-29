import React, {Component} from 'react'
import Form from './Form'

class Form_Test extends Component{

    constructor(props){

        super(props)

        this.state={

            username:'',
            comments:'',
            topic:''
        }

    }

    handleUsername=(event)=>{

        this.setState({
            username:event.target.value
        })
    }

    handleComment=(event)=>{

        this.setState({
            comments:event.target.value
        })
    }
    handleTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handleSubmit=()=>{

        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }

    render(){
        const {username,comments,topic}=this.state
        const heading={
            color:'blue'
        }
        return(
            <div>
                <h1 style={heading}>Form Handling</h1>
                <form onSubmit={this.handleSubmit}>
                <div>
                <label style={heading}>Username:</label>
                <input type='text' value={username} onChange={this.handleUsername}/>
                </div>

                <div>
                    <label style={heading}>Comments:</label>
                    <textarea type='text' value={this.state.comments} onChange={this.handleComment}/>
                </div>
                <div>
                    <lable style={heading}>Topic:</lable>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value='React'>React js</option>
                        <option value='Angular'>Angular js</option>
                        <option value='Vue'>Vue js</option>
                    </select>
                </div>         

                    <button type='submit'>Submit</button>    
                </form>
            </div>
        )
    }
}

export default Form_Test