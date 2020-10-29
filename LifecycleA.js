import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
        console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props,state){

        console.log('LifeCycleA getDerivedStateFromProps()')
        return null
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount() method')
    }

    
    render() {
        console.log('LifecycleA render() method')
        return (
            <div>
             <div>LifeCycle A </div> 
             <LifecycleB/> 
            </div>
        )
    }
}

export default LifecycleA
