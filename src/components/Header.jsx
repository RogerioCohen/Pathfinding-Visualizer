import React, {Component} from 'react';
import './Header.css'

import Astar from '../algorithms/dijstra.js'
import bfs from '../algorithms/bfs.js'
import dfs from '../algorithms/dfs.js'
import dijstra from '../algorithms/dijstra.js'
import { render } from '@testing-library/react';
var variavel = true;
class Header extends React.Component{
    
        
           handleClickDij(event){
                console.log('A');
                event.target.style.background = "#FF7070";
                variavel = false;
                
            }
            
            handleClickAs(event){
                console.log('B');
                event.target.style.background = "#FF7070";
                variavel = false;
            }

            handleClickBFS(event){
                console.log('C');
                event.target.style.background = "#FF7070";
                variavel = false;
            }

            handleClickDFS(event){
                console.log('D');
                event.target.style.background = "#FF7070";
                variavel = false;
            } 
     
    render(){
        return(
            <div id = 'header'>
                <h1> Pathfing Visualizer</h1>
                    
            <h5 onClick = {event => {
             if( variavel ){
                return this.handleClickDij(event);
             }  }
            }>
                View Dijstra                        
            </h5> 

            <h2 id = 't'> </h2>
            
            <h5 onClick = {event => {
                if( variavel ){
                   return this.handleClickAs(event);
                }  }
            }>
                View A*
             </h5>                                          
             
             <h2 id = 't'> </h2>                             
             
            <h5 onClick = {event => {
             if( variavel ){
                return this.handleClickBFS(event);
             }  }}>
                    View BFS
            </h5>                                                                     
            <h2 id = 't'> </h2>
            <h5 onClick = {event =>{
             if( variavel ){
                return this.handleClickDFS(event);
             }  } }>
                View DFS
            </h5>      
                                                                                 
            </div>
            
        )

    }
    }      
        

export default Header


