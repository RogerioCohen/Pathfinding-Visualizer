import React, {Component} from 'react'
import './Block.css'


class Block extends Component {



    paint(e){
        console.log(window.clicked)
        if(window.selectedBtn){
            if(window.selectedBtn !== 'walls'){
                
                let lastPainting = document.getElementsByClassName(window.selectedBtn)[0]
                if(lastPainting){
                    lastPainting.className = 'block'
                }
                e.target.className = `block ${window.selectedBtn}`
            } else if (window.clicked){
                e.target.className = `block ${window.selectedBtn}`
            }
        }
    }

    render(){
        return (
            <div className={`block`}
                id={this.props.id}
                onMouseMove={e => { 
                    if(window.selectedBtn === 'walls'){
                        return this.paint(e)
                    }
                    return false
                }}
                onDrag={() => false}
                onClick={e => this.paint(e)}

            >
      
            </div>
        )
    }
    
}


export default Block