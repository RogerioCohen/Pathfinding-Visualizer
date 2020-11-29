import React from 'react'
import Paint from '../components/Paint.jsx'
import Grid from './Grid.jsx'
import Steps from '../components/Steps.jsx'
const App = function() {
    return (
        <React.Fragment>
            <Grid></Grid>
            <Paint></Paint>
            <Steps></Steps>
        </React.Fragment>

    )
}


export default App
