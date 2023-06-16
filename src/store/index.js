import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { dataReducer } from './reducer';



const rootReducer = combineReducers({
    data: dataReducer
})

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
);

export const store = createStore(rootReducer, enhancer)
