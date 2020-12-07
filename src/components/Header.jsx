import React, {Component} from 'react';
import './Header.css'
import bfs from '../algorithms/bfs'


let selectedAlgorithm = null
class Header extends React.Component{
    
    state = {
        buttonChecker: true
    }
    handleClickDij(event){
        console.log('A');
        event.target.style.background = "#FF7070";
        this.setState({buttonChecker: false})

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
        selectedAlgorithm = bfs
    }

    handleClickDFS(event){
        console.log('D');
        event.target.style.background = "#FF7070";
        this.setState({buttonChecker: false})
    } 
     
    render(){
        return(
            <div className = 'header'>
                    
                <button className='headerBtn' onClick = {event => {
                    if( this.state.buttonChecker ){
                        return this.handleClickDij(event);
                    }  }
                }>
                    View Dijstra                        
                </button> 
            
                <button className='headerBtn' onClick = {event => {
                    if( this.state.buttonChecker ){
                        return this.handleClickAs(event);
                    }  }
                }>
                    View A*
                </button>                                          
                                      
             
                <button className='headerBtn' onClick = {event => {
                    if( this.state.buttonChecker ){
                        return this.handleClickBFS(event);
                    }  }}>
                        View BFS
                </button>    

                <button  className='headerBtn' onClick = {event =>{
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


