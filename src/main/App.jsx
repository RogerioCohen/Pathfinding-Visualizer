import React from 'react'
import Paint from '../components/Paint.jsx'
import Grid from './Grid.jsx'
import Header from '../components/Header.jsx'
const App = function() {
    return (
        <React.Fragment>
            <Header></Header>
            <Grid></Grid>
            <Paint></Paint>
            
        </React.Fragment>
    )
}


export default App


