import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './Leaders';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigStore = () => {
    const store = createStore(
        combineReducers ({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions
        }), 
        applyMiddleware(thunk, logger)
    );
    return store;
}

