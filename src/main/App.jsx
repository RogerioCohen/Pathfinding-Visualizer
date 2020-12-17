import React from 'react'
import Steps from '../components/Steps'
import Grid from './Grid.jsx'
import {Header} from '../components/Header.jsx'
import Subtitle from'../components/Subtitle'

const App = function() {
    return (
        <React.Fragment>
            <Header></Header>
            <Subtitle></Subtitle>
            <Grid></Grid>
            <Steps></Steps>
        </React.Fragment>

    )
}

export default App
