import React, {Component} from 'react'
import ListaAleatorio from '../algorithms/bfs.js'
import './Block.css'
//import {ListaVisitados, ListaCaminho} from 'App'

class Steps extends Component {
  state = {
    limpar: false,
    conteudoDoBotao: 'Reproduce',
    indiceSeta: 0
          }

TesteButao() {
  let lista = ListaAleatorio()
  let counter = 0
  let interval = setInterval(()=>{

   this.pintarQuadradinho(lista[counter])
   counter++
   if (counter === lista.length) {
    clearInterval(interval)

    // Muda o texto de Reproduce para Clear
    this.setState(
      {
      limpar: true,
      conteudoDoBotao: 'Clear'
      }
    )
    // Muda o texto de Reproduce para Clear


  }
 }
 ,1000)
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


pintarQuadradinho(id) {
  let block = document.getElementById(id)
  block.className += ' Visitados'
  console.log(block)
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
