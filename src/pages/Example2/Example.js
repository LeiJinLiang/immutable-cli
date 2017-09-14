import React, { Component } from 'react'
const Immutable = require('immutable')
import { List, Map , is} from 'immutable'

const  shallowEqualImmutable = (objA, objB) => {
    if (objA === objB || is(objA, objB)) {
        return true;
    }

    if (typeof objA !== 'object' || objA === null ||
        typeof objB !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }

    return true;
}

let time = 0

class Example extends Component{
    constructor(props){
        super(props)
        this.state ={
            data: Immutable.fromJS({
                count: 0,
                user:{
                    school: {
                        high: 'highSchoolName',
                        middle: 'middleSchoolName'
                    }
                }
            })
        }
    }

    handleCountClick() {
        this.setImmState(d => d.update('count', v => v + 1));
    }

    handleCountClickSameValue() {
        this.setImmState(d => d.update('count', v => v));
    }


    handleChangeSchool(e) {
        var v = e.target.value;
        this.setImmState(d => d.updateIn(['user','school', 'high'], ()=>v));
    }

    handleChangeSchoolSameValue() {
        this.setImmState(d => d.updateIn(['user','school', 'high'], (v)=>v));
    }


    setImmState(fn) {
        this.setState(function (prev) {

            var data = prev.data;

            return {
                data: fn(data)
            };
        });
    }

    shouldComponentUpdate(nextProps, nextState){
        return (
            !shallowEqualImmutable(this.props, nextProps) ||
            !shallowEqualImmutable(this.state, nextState)
        );
    }

    render(){
        var data = this.state.data;
        time++;
        return(
            <div>
                <h2>
                    Render Times: {time}
                </h2>
                <p>
                    school name: <input type="text" onChange={this.handleChangeSchool} />
                </p>
                <p>
                    High school: {data.getIn(['user', 'school', 'high'])}<br/>
                    Middle school: {data.getIn(['user', 'school', 'middle'])}
                </p>
                <p>
                    <button onClick={this.handleCountClick}>Add to count</button>
                </p>
                <p>
                    <button onClick={this.handleCountClickSameValue}>SetToSameCount</button>
                    <button onClick={this.handleChangeSchoolSameValue}>SetToSameSchool</button>
                </p>
                <p>
                    Count: {data.get('count')}
                </p>
            </div>
        )
    }
}

module.exports = Example