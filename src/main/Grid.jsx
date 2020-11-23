import React, {Component} from 'react'
import Block from '../components/Block'
import './Grid.css'



// viewDeterminant(){
//     let idsOfTheDeterminant = det()
//     let index = 0
//     console.log(idsOfTheDeterminant)

//     let interval = setInterval(()=> {
//         if(index < idsOfTheDeterminant.length){

//             let block = document.getElementById(idsOfTheDeterminant[index++])
//             block.style.backgroundColor = "#111"
//         } else {
//             clearInterval(interval)
//         }
//     },1000)

// }

function creatingGrid(){
    let numColums = 60
    let numRows = 30
    let blocks = []
    for(let i = 0; i <= numRows; i++){
        let line = []
        for(let j = 0; j <= numColums; j++){
            line.push(<Block id={`${i}-${j}`}></Block>)
        }
        blocks.push(line)
    }
    return blocks
}

class Grid extends Component {
    render() {
        return (
            <div>
                <button></button>
                <div className="grid">
                    {creatingGrid()}
                </div>
            </div>
        )
        
    }

} 
export default Grid

//console.log(Grid.creatingGrid())
//export const blocks = creatingGrid()

