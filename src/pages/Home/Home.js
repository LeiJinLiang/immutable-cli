import React, { Component } from 'react'
import { Link } from 'react-router'
import { cache , chunk} from "../../utils"
import Silde from '../../components/Slide/Slide'
require('./home.css')

class Home extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount () {
       cache.set('obj',{name : 'jinlei', age : 24})
       console.log(chunk(['a','b','c'],2))
    }



    render() {
        return (
            <div>
                Home...
                <Link to = 'demo1'>demo1</Link>
                <Link to = 'demo2'>demo2</Link>
                <Link to = 'demo3'>demo3</Link>
                <Silde/>


                {this.props.children}
            </div>
        )
    }
}

module.exports = Home