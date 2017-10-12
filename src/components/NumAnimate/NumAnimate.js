import React, { Component } from 'react'
import Odometer from 'odometer'
import ReactDOM from 'react-dom'
class NumAnimate extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.odometer = new Odometer({
            el: ReactDOM.findDOMNode(this),
            value: 100,
            format: '(,ddd)',
        });
        let _this = this
        setTimeout(()=>{
            _this.odometer.update(Math.random()*10000)
        },0)
    }

    componentDidUpdate() {
        this.odometer.update(Math.random()*10000)
    }

    render() {
        return React.createElement('div')
    }
}

export default NumAnimate