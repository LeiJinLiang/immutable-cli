import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import configureStore from './store/configStore'
import { Provider } from 'react-redux'

const store = configureStore()

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
      <Provider store={store}>
            <Router
                history={browserHistory}
                routes={rootRoute}
            />
      </Provider>
), document.getElementById('root'))