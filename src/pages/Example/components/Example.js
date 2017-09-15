import React, { Component } from 'react'
require('../styles/example.css')
const  shallowEqual =(objA, objB) =>{
    if (objA === objB) {
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
        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }

    return true;
}


let time = 0
class Example extends Component {
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            user : {
                school : {
                    high : 'highSchoolName',
                    middle : 'middleSchoolName'
                }
            }
        }
    }

    handleChangeSchool =(e) => {
        const val = e.target.value
        this.setState({
            user : {
                school:{
                    high : val
                }
            }
        })
    }

    handleCountClick =() => {
        this.setState((data) => ({
            count: data.count+1
        }))
    }

    handleCountClickSameValue =() =>{
        this.setState((data) => ({
            count: data.count
        }))
    }

    handleChangeSchoolSameValue = () => {
        this.setState((data) => ({
            user : {
                school : {
                    high : data.user.school.high,
                    middle : 'middleSchoolName2'
                }
            }
        }))
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (
            !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState)
        );
    }

    render() {
        const  data   = this.state
        console.log('data',data)
        time++
        return(
            <div>
                <h2>Render Times:{ time }</h2>
                <p>
                    High school name: <input type="text" onChange={this.handleChangeSchool} />
                </p>
                <p>
                    High school: {data.user.school.high}<br/>
                    Middle school: {data.user.school.middle}
                </p>
                <button onClick={this.handleCountClick}>Add to count</button>
                <p>
                    <button onClick={this.handleCountClickSameValue}>SetToSameCount</button>
                    <button onClick={this.handleChangeSchoolSameValue}>SetToSameSchool</button>
                </p>
                <p>
                    Count: {data.count}
                </p>
            </div>
        )
    }
}

module.exports =  Example