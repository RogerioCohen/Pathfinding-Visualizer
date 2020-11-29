import React, {Component} from 'react'
import blackPincel from '../assets/images/big-paint-brush.svg'
import redPincel from '../assets/images/big-paint-brush-red.svg'
import bluePincel from '../assets/images/big-paint-brush-blue.svg'
import greenPincel from '../assets/images/big-paint-brush-green.svg'

import './Paint.css'

class Paint extends Component {

    state = {
        selectedButton: null,
        beginning: [blackPincel, greenPincel],
        end: [blackPincel, redPincel],
        walls: [blackPincel, bluePincel]
    }

    changeTheSelectedButton(e){
        let newSelectedBtn = e.currentTarget.id
        let oldSelectedBtn = this.state.selectedButton
        if(oldSelectedBtn !== null){
            if(oldSelectedBtn === newSelectedBtn){
                this.setState(
                    {
                        selectedButton: null,
                        newSelectedBtn: this.state[newSelectedBtn].reverse(),
                    }
                )
            } else {
                this.setState({
                    selectedButton: newSelectedBtn,
                    newSelectedBtn: this.state[newSelectedBtn].reverse(),
                    oldSelectedBtn: this.state[oldSelectedBtn].reverse()
                })
            }
        } else {
            console.log('entrei')
            this.setState({selectedButton: newSelectedBtn, newSelectedBtn: this.state[newSelectedBtn].reverse()})
        }

    }
    render(){
        window.selectedBtn = this.state.selectedButton
        return (
            <div className="paint">
                <div className="paintButton">
                    <div className="pincel" id="beginning" onClick={e => this.changeTheSelectedButton(e)}>
                        <img src={this.state.beginning[0]} alt=""/>
                    </div>
                    <p>Paint the beginning</p>
                </div>
                <div className="paintButton" >
                    <div className="pincel" id="end" onClick={e => this.changeTheSelectedButton(e)}>
                        <img src={this.state.end[0]} alt=""/>
                    </div>
                    <p>Paint the End</p>
                </div>
                <div className="paintButton">
                    <div className="pincel" id="walls" onClick={e => this.changeTheSelectedButton(e)}>
                        <img src={this.state.walls[0]} alt=""/>
                    </div>
                    <p>Paint the Walls</p>
                </div>
            </div>

        )
    }
}


export default Paint
