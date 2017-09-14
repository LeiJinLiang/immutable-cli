import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'


const rootRoute = {
    childRoutes: [ {
        path: '/',
        component: require('./pages/Home/Home'),
        childRoutes : [
            require('./pages/Example'),
            require('./pages/Example2')
        ]
    } ]
}


render((
        <Router
            history={browserHistory}
            routes={rootRoute}
        />
), document.getElementById('root'))