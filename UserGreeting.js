import React, {Component} from 'react'

class UserGreeting extends Component{

    constructor(props){

        super(props)

        this.state={
            isLoggedIn:false
        }
    }

    render(){

        //4.Short Circuit Operator
        return this.state.isLoggedIn && <div>Welcome Vishnwas</div>
        //3. Ternary Conditional Operator
        // return this.state.isLoggedIn?(<div>Welcome Vishnwas</div>):(<div>Welcome Guest</div>)

        //2. Element Variable approach
        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Vishnwas</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // 1. if/else Approach
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Vishnwas</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return(

        //     <div>
        //         <div>Welcome Vishnwas</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting