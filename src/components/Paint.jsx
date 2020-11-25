import React, {Component} from 'react'
import blackPincel from '../assets/images/big-paint-brush.svg'
import redPincel from '../assets/images/big-paint-brush-red.svg'
import bluePincel from '../assets/images/big-paint-brush-blue.svg'
import greenPincel from '../assets/images/big-paint-brush-green.svg'
import orangeEraser from '../assets/images/eraser-tool-for-school-orange.svg'
import blackEraser from '../assets/images/eraser-tool-for-school.svg'

import './Paint.css'

class Paint extends Component {    
    images = {
        beginning: [blackPincel, greenPincel],
        end: [blackPincel, redPincel],
        walls: [blackPincel, bluePincel],
        eraser: [blackEraser, orangeEraser]
    }
    state = {
        selectedButton: null,
        beginning: 0,
        end: 0,
        walls: 0,
        eraser: 0
    }

    changeTheSelectedButton(e){
        let newSelectedBtn = e.currentTarget.id
        let oldSelectedBtn = this.state.selectedButton
        if(oldSelectedBtn === newSelectedBtn || !oldSelectedBtn){
            let togglingBtn = {...this.state}
            togglingBtn[newSelectedBtn] = this.state[newSelectedBtn] ? 0 : 1
            togglingBtn.selectedButton = oldSelectedBtn? null : newSelectedBtn 
            this.setState(togglingBtn)
        } else {
            let changingBtn = { ...this.state}
            changingBtn.selectedButton = newSelectedBtn
            changingBtn[newSelectedBtn] = this.state[newSelectedBtn] ? 0 : 1
            changingBtn[oldSelectedBtn] = this.state[oldSelectedBtn] ? 0 : 1
            this.setState(changingBtn)
        }

    }
    render(){
        window.selectedBtn = this.state.selectedButton
        return (
            <div className="paint">
                <div className="paintButton">
                    <div className="pincel" id="beginning" onClick={e => this.changeTheSelectedButton(e)}>
                        <img src={this.images.beginning[this.state.beginning]} alt=""/>
                    </div>
                    <p>Paint the Beginning</p>
                </div>    
                <div className="paintButton" >
                    <div className="pincel" id="end" onClick={e => this.changeTheSelectedButton(e)}>
                        <img src={this.images.end[this.state.end]} alt=""/>
                    </div>
                    <p>Paint the End</p>
                </div>    
                <div className="paintButton">
                    <div className="pincel" id="walls" onClick={e => this.changeTheSelectedButton(e)}>
                        <img src={this.images.walls[this.state.walls]} alt=""/>
                    </div>
                    <p>Paint the Walls</p>
                </div>  
                <div className="paintButton">
                    <div className="pincel" id="eraser" onClick={e => this.changeTheSelectedButton(e)}>
                        <img src={this.images.eraser[this.state.eraser]} alt=""/>
                    </div>
                    <p>Erase</p>
                </div>  
            </div>
        )
    }
}


export default Paint
