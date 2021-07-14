import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MainPage from './pages/main'
import Page404 from './pages/404'
import ErrorPage from './pages/error'


function RouterView() {
    return (
        <Switch>
            <Route
                path='/'
                exact
                component={MainPage}
            />
            <Route
                path='/error'
                exact
                component={ErrorPage}
            />
            <Route
                path='/404'
                exact
                component={Page404}
            />
            <Redirect
                from='*'
                to='/404'
            />
        </Switch>
    )
}

export default RouterView