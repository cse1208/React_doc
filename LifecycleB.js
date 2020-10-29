import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Vishwas'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props,state){

        console.log('LifecycleB getDerivedStateFromProps()')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount() method')
    }

    
    render() {
        console.log('LifecycleB render() method')
        return (
            <div>
             LifeCycle B   
            </div>
        )
    }
}

export default LifecycleB
