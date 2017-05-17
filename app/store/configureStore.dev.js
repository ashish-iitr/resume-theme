import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import promise from 'redux-promise-middleware';

export default function configureStore(initialState) {
    const middleware = applyMiddleware(promise(), thunkMiddleware);
    const store = middleware(createStore)(
        rootReducer,
        initialState,
        DevTools.instrument()
    );

    return store;
}
