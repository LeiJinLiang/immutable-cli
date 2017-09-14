import React, { Component } from 'react'
import { Link } from 'react-router'
class Home extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                Home...
                <Link to = 'demo1'>demo1</Link>
                <Link to = 'demo2'>demo2</Link>
                {this.props.children}
            </div>
        )
    }
}

module.exports = Home