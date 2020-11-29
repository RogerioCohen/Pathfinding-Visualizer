import React, {Component} from 'react'
import blackPincel from '../assets/images/big-paint-brush.svg'
import redPincel from '../assets/images/big-paint-brush-red.svg'
import bluePincel from '../assets/images/big-paint-brush-blue.svg'
import greenPincel from '../assets/images/big-paint-brush-green.svg'
import orangeEraser from '../assets/images/eraser-tool-for-school-orange.svg'
import blackEraser from '../assets/images/eraser-tool-for-school.svg'
import './Grid.css'



class Block extends Component {
    paint(e, isEraser, isWall){
        if(e.type === 'click'){
            let lastPainting = document.getElementsByClassName(this.props.selectedBtn)[0]
            if(lastPainting && !isEraser && !isWall){
                lastPainting.className = 'block'
            }
            isEraser? e.target.className = `block` : e.target.className = `block ${this.props.selectedBtn}`
        } else if (this.props.clicked) {
            isWall ? e.target.className = `block ${this.props.selectedBtn}` : e.target.className = `block`
        }
    }

    render(){
        return (
            <div className={`block`}
                id={this.props.id}
                onMouseMove={e => { 
                    let isWall = this.props.selectedBtn === 'walls'
                    let isEraser = this.props.selectedBtn === 'eraser'
                    if(isWall || isEraser){
                        return this.paint(e, isEraser, isWall)
                    } 
                    return 
                }}
                onClick={e => {
                    if(this.props.selectedBtn){
                        return this.paint(e, this.props.selectedBtn==='eraser', this.props.selectedBtn==='walls')
                    }
                    return
                }}
            >
      
            </div>
        )
    }
    
}


class PaintBtn extends Component{

    images = {
        beginning: [blackPincel, greenPincel],
        end: [blackPincel, redPincel],
        walls: [blackPincel, bluePincel],
        eraser: [blackEraser, orangeEraser]
    }

    render(){
        return (

        <div className="paintButton">
            <div className="pincel" id={this.props.id} onClick={e => this.props.onClick(e)}>
                <img src={this.images[this.props.id][this.props.srcIndex]} alt=""/>
            </div>
            <p>{this.props.children}</p>
        </div>    
        )
    }
}
class Grid extends Component {    
    state = {
        selectedButton: null,
        beginning: 0,
        end: 0,
        walls: 0,
        eraser: 0,
        gridAreaClicked: 0
    }
    setClicked(e, click){
        e.preventDefault()
        this.setState({clicked: click})
    }
    creatingGridArea(){
        let numColums = 60
        let numRows = 30
        let blocks = []
        for(let i = 0; i <= numRows; i++){
            let line = []
            for(let j = 0; j <= numColums; j++){
                line.push(<Block clicked={this.state.clicked} selectedBtn={this.state.selectedButton} id={`${i}-${j}`}></Block>)
            }
            blocks.push(line)
        }
        return blocks
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
        return (
            <div className="grid">
                <div className="grid-area"
                    onMouseUp={e => {
                        this.setClicked(e, false)
                    }}
                    onMouseDown={e => {
                        this.setClicked(e, true)
                    }}
                    onMouseLeave= {e => {
                        this.setClicked(e, false)
                    }}
                >
                    {this.creatingGridArea()}
                </div>
                <div className="grid-paint">
                    <PaintBtn id="beginning" onClick={this.changeTheSelectedButton.bind(this)} srcIndex={this.state.beginning}>Paint the Beginning</PaintBtn>
                    <PaintBtn id="end" onClick={this.changeTheSelectedButton.bind(this)} srcIndex={this.state.end}>Paint the End</PaintBtn>
                    <PaintBtn id="walls" onClick={this.changeTheSelectedButton.bind(this)} srcIndex={this.state.walls}>Paint the Walls</PaintBtn>
                    <PaintBtn id="eraser" onClick={this.changeTheSelectedButton.bind(this)} srcIndex={this.state.eraser}>Erase</PaintBtn>
                </div>
            </div>
        )
    }
}


export default Grid

