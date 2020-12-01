import React from 'react'
import Steps from '../components/Steps'
import Grid from './Grid.jsx'
import {Header} from '../components/Header.jsx'
const App = function() {
    return (
        <React.Fragment>
            <Header></Header>
            <Grid></Grid>
            <Steps></Steps>
        </React.Fragment>

    )
}


export default App
