import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import postsReducer from '../reducers/postReducer';

// import loggerMiddleware from './middlewares/logger';
import promise from './middlewares/promise';

const composeEnhancers = process.env.NODE_ENV !==
    'production' && typeof window !==
    'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middlewares = applyMiddleware(
    // loggerMiddleware,
    thunk,
    //promise
    ///...
);


const store = createStore( 
    postsReducer,
    composeEnhancers(middlewares)
);

export default store;