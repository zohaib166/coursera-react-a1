import { createStore, combineReducers } from 'redux'
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './Leaders';
import { Promotions } from './promotions';


export const ConfigStore = () => {
    const store = createStore(
        combineReducers ({
            dishes: Dishes,
            leaders: Leaders,
            comments: Comments,
            promotions: Promotions
        })
    );
    return store;
}

