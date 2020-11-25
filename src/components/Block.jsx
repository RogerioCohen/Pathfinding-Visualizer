import React, {Component} from 'react'
import './Block.css'


class Block extends Component {
    paint(e, isEraser, isWall){
        if(e.type === 'click'){
            let lastPainting = document.getElementsByClassName(window.selectedBtn)[0]
            if(lastPainting && !isEraser && !isWall){
                lastPainting.className = 'block'
            }
            isEraser? e.target.className = `block` : e.target.className = `block ${window.selectedBtn}`
        } else if (window.clicked) {
            isWall ? e.target.className = `block ${window.selectedBtn}` : e.target.className = `block`
        }
    }

    render(){
        return (
            <div className={`block`}
                id={this.props.id}
                onMouseMove={e => { 
                    let isWall = window.selectedBtn === 'walls'
                    let isEraser = window.selectedBtn === 'eraser'
                    if(isWall || isEraser){
                        return this.paint(e, isEraser, isWall)
                    } 
                    return 
                }}
                onClick={e => {
                    if(window.selectedBtn){
                        return this.paint(e, window.selectedBtn==='eraser', window.selectedBtn==='walls')
                    }
                    return
                }}
            >
      
            </div>
        )
    }
    
}


export default Block