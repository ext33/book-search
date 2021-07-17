import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MainPage from './pages/main'
import pageNotFound from './pages/notFound'
import ErrorPage from './pages/error'


function RouterView() {
    // ----------------------
    // app router
    // ----------------------
    // '/': main page
    // '/error': error page
    // '404': not found page
    // ----------------------

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
                component={pageNotFound}
            />
            <Redirect
                from='*'
                to='/404'
            />
        </Switch>
    )
}

export default RouterView