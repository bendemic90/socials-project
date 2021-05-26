import React from 'react'
import { Container } from '@material-ui/core';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Auth from './components/Auth/Auth'

const App = () => {
    return (
        <BrowserRouter>
        <Container maxwidth="lg">
            <Nav />
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/auth" exact component={Auth}/>
            </Switch>
        </Container>
        </BrowserRouter>
    )
}

export default App;