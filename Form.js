import React, {Component} from 'react'

class Form extends Component{

    constructor(props){

        super(props)

        this.state={
            Username:'',
            Comments:'',
            topic:''
        }
    }

    handleUserChange=(event)=>{
        this.setState({Username:event.target.value})
    }

    handleCommentsChange=event=>{
        this.setState({Comments:event.target.value})
    }

    handleTopicChange=event=>{
        this.setState({topic:event.target.value})
    }

    handleSubmit=event=>{
        alert(`${this.state.Username} ${this.state.Comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render(){
           const {Username,Comments,topic}=this.state
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type='text' value={Username} onChange={this.handleUserChange}/>
                </div>
                <div>
                    <label>
                        Comments:
                    </label>
                    <textarea value={this.state.Comments} onChange={this.handleCommentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form