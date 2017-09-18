import React , { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './styles.css'
const viewport = document.body.clientWidth


class Silde extends Component {
    constructor(props){
        super(props)
        this.state = {
            obj : {}
        }
    }

    componentDidMount () {
        this.handleLine(this.refs.canvas, viewport, 10)
    }

    handleLine = (canvas, width, scaleH) => {
        const ctx = canvas.getContext('2d')
        const  devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1,
            ratio = devicePixelRatio / backingStoreRatio;

        const oldWidth = canvas.width;
        const oldHeight = canvas.height;
        canvas.width = oldWidth * ratio;
        canvas.height = oldHeight * ratio;
        canvas.style.width = oldWidth + 'px';
        canvas.style.height = oldHeight + 'px';


        // baseLine
        ctx.scale(ratio, ratio);
        ctx.beginPath()
        ctx.moveTo(0,scaleH)
        ctx.lineTo(width,scaleH)
        ctx.lineWidth = 5
        ctx.strokeStyle = '#ff0000'
        ctx.stroke()
        ctx.closePath()


        //scale left
        ctx.beginPath()
        ctx.moveTo(0,scaleH)
        ctx.lineTo(0,0)
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.closePath()

        // //scale middle
        ctx.beginPath()
        ctx.moveTo(width/2,scaleH)
        ctx.lineTo(width/2,0)
        ctx.lineWidth = 1
        ctx.strokeStyle = '#000'
        ctx.stroke()
        ctx.closePath()

        // scale 1/4

        ctx.beginPath()
        ctx.moveTo(width/4,scaleH)
        ctx.lineTo(width/4,0)
        ctx.lineWidth = 1
        ctx.strokeStyle = '#000'
        ctx.stroke()
        ctx.closePath()

        // scale 3/4

        ctx.beginPath()
        ctx.moveTo((width/4)*3,scaleH)
        ctx.lineTo((width/4)*3,0)
        ctx.lineWidth = 1
        ctx.strokeStyle = '#000'
        ctx.stroke()
        ctx.closePath()

        //  scale right

        ctx.beginPath()
        ctx.moveTo(width,scaleH)
        ctx.lineTo(width,0)
        ctx.lineWidth = 1
        ctx.strokeStyle = '#ff0000'
        ctx.stroke()
        ctx.closePath()

        //文字
        ctx.fillText('0',0,25)
        ctx.fillText('50',(width/4)-10,25)
        ctx.fillText('100', (width/2)-10, 25)
        ctx.fillText('150',(width/4)*3-10,25)
        ctx.fillText('200',width-25, 25)
    }

    handleClick = (e) => {
        console.log('e',e.target.getContext('2d'))
    }

    render() {
        return (
            <div styleName = "container">
                <canvas onClick = {this.handleClick} ref = "canvas" width={viewport} height="100"></canvas>
            </div>
        )
    }
}

export default CSSModules(Silde,styles)
