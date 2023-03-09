import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import isBrowser from '@/utils/isBrowser';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
let store;
export default function (initialState) {
    if (isBrowser()) {
        if (!store) {
            return create(initialState);
        }
        return store;
    }
    return create(initialState);
}
function create(initialState) {
    return createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk)))
}