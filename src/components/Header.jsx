import React, {Component} from 'react';
import './Header.css'
import algorithms from '../algorithms/surroundingWalls'


let selectedAlgorithm = null
class Header extends React.Component{
    
    state = {
        buttonChecker: true,
        possibleColors : ['green',"#FF7070"],
        Dij:0,
        Astar:0,
        BFS:0,
        DFS:0
    }
    handleClickDij(event){
        console.log('A');
        event.target.style.background = "#FF7070";
        this.setState({buttonChecker: false})
        console.log(algorithms)
        selectedAlgorithm = algorithms
    }
    
    handleClickAs(event){
        console.log('B');
        event.target.style.background = "#FF7070";
        this.setState({buttonChecker: false})
    }

    handleClickBFS(event){
        console.log('C');
        event.target.style.background = "#FF7070";
        this.setState({buttonChecker: false})
    }

    handleClickDFS(event){
        console.log('D');
        event.target.style.background = "#FF7070";
        this.setState({buttonChecker: false})
    } 
     
    render(){
        return(
            <div className = 'header'>
                    
                <button className='headerBtn' id = 'Dij' onClick = {event => {
                    if( this.state.buttonChecker ){
                        return this.handleClickDij(event);
                    }  }
                }>
                    View Dijstra                        
                </button> 
            
                <button className='headerBtn' id = 'Astar' onClick = {event => {
                    if( this.state.buttonChecker ){
                        return this.handleClickAs(event);
                    }  }
                }>
                    View A*
                </button>                                          
                                      
             
                <button className='headerBtn'   id =  'BFS' onClick = {event => {
                    if( this.state.buttonChecker ){
                        return this.handleClickBFS(event);
                    }  }}>
                        View BFS
                </button>    

                <button  className='headerBtn' id =  'DFS' onClick = {event =>{
                    if( this.state.buttonChecker ){
                        return this.handleClickDFS(event);
                    }  } }>
                    View DFS
                </button>      
                <h1> Pathfinding Visualizer</h1>
                                                                                 
            </div>
        )

    }
    }      
        

export {Header, selectedAlgorithm}


