import React, {Component} from 'react'
import {selectedAlgorithm} from './Header'
//import {ListaVisitados, ListaCaminho} from 'App'
import '../main/Grid.css'

function creatingMatrix(){
  let matrix = []
  for(let i = 0; i <= 30; i++){
    matrix[i] = new Array(61)
  }
  let walls = [...document.getElementsByClassName('walls')]
  walls.forEach(wall => {
    let rowOfTheWall, columnOfTheWall
    [rowOfTheWall, columnOfTheWall] = wall.id.split('-')
    matrix[rowOfTheWall][columnOfTheWall] = 'wall'
  })
  return matrix
}

class Steps extends Component {
  state = {
    limpar: false,
    conteudoDoBotao: 'Reproduce',
    indiceSeta: 0
  }

  TesteButao() {
    this.setState(
      {
        limpar: true,
        conteudoDoBotao: 'Clear',
      }
    )

    if(selectedAlgorithm){

      let beginning = document.getElementsByClassName('beginning')[0]
      let end = document.getElementsByClassName('end')[0]
      if(beginning && end){
        let lista = selectedAlgorithm(beginning.id, end.id, creatingMatrix())
        let counter = 0
        let interval = setInterval(()=>{
          if (counter === lista.length || !this.state.limpar) {
            clearInterval(interval)
            // Muda o texto de Reproduce para Clear
            // Muda o texto de Reproduce para Clear
          } else {
            this.pintarQuadradinho(lista[counter])
            counter++
          }
        }, 20)
      
      } else {
        window.alert('Please Select the Blocks')
        }
      } else {
        window.alert('Please Select an Algorithm')
      }


  }

  limpar() {
    let visitadosLista = document.getElementsByClassName('Visitados')
    var arr = [...visitadosLista];
    let tamanho = arr.length
    for(let i = 0; i < tamanho ; i++){
      visitadosLista[0].className = 'block'
    }

    this.setState(
      {
      limpar: false,
      conteudoDoBotao: 'Reproduce'
    } )

  }


  pintarQuadradinho(ids){

    ids.forEach(id => {
      let block = document.getElementById(id)
      block.className += ' Visitados'

    })
  }

// Esse metodo de setInterval pode dar problemas de performance

  render() {

    return (
        <div className='Steps'>
          <button className='StepFoward'> </button>
          <button
            className='Reproduce' onClick={()=>{

            if (this.state.limpar) {
              this.limpar()
            }
            else {this.TesteButao()}
            }

          }> {this.state.conteudoDoBotao}
          </button>

          <button className='StepBack'> </button>
        </div>
      )
  }


}

export default Steps
