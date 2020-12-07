import React, {Component} from 'react';
import './Header.css'
import algorithms from '../algorithms/surroundingWalls'
import Astar from '../algorithms/Astar' 
import bfs from '../algorithms/bfs'
import dfs from '../algorithms/dfs'
import dijkstra from '../algorithms/dijkstra'

let selectedAlgorithm = null


class Header extends React.Component{
    
    state = {
        
        nowButton : null
    }

    handleClickDij(event){
        console.log('Dij');
        
        selectedAlgorithm = dijkstra
        
    }
    
    handleClickAs(event){
        console.log('Astar');
        selectedAlgorithm = Astar
    }

    handleClickBFS(event){
        console.log('BFS');
        selectedAlgorithm = bfs
    }

    handleClickDFS(event){
        console.log('DFS');
        selectedAlgorithm = dfs
    } 
    



    teste(event){
        if(this.state.nowButton === null){
           this.setState({nowButton: event.target})  
           event.target.style.background = '#FF7070'
        }else{
            this.state.nowButton.style.background = 'rgb(117, 240, 144)'
            event.target.style.background = '#FF7070'
            this.setState({nowButton: event.target})
        }
        
    }    
        
       
    render(){
        return(
            <div className = 'header'>
                    
                <button className='headerBtn' id = 'Dij' onClick = {event => {
                    this.handleClickDij(event);
                    this.teste(event)
                    }
                    }>
                    View Dijstra                        
                </button> 
                     
                
            
                <button className='headerBtn' id = 'Astar' onClick = {event => {
                    this.handleClickAs(event);
                    this.teste(event)
                    }
                    }>
                    View A*
                </button>                                          
                                      
             
                <button className='headerBtn'   id =  'BFS' onClick = {event => {
                    this.handleClickBFS(event);
                    this.teste(event)
                    }}>
                        View BFS
                </button>    

                <button  className='headerBtn' id =  'DFS' onClick = {event =>{
                    this.handleClickDFS(event);
                    this.teste(event)
                    } }>
                    View DFS
                </button>      
                <h1> Pathfinding Visualizer</h1>
                                                                                 
            </div>
        )

    }
    }      
        

export {Header, selectedAlgorithm}


