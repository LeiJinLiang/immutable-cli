import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunk]

const createStoreWithMiddleware = applyMiddleware(
    ...middleware
)(createStore)

export default function configureStore(preloadedState) {
    const store = createStoreWithMiddleware(rootReducer, preloadedState);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default;
            store.replaceReducer(nextReducer);
        });
    }
    return store
}