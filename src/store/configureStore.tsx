import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from "connected-react-router";
import {createReducer} from "./reducers/reducers";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    }
}

const persistConfig = {
    key: 'pricing',
    storage,
    blacklist: ['global']
}

export const configureStore = (initialState = {}, history: any) => {
    let composeEnhancers = compose
    const reduxSagaMonitorOptions = {}

    if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
        }
    }
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const middlewares = [sagaMiddleware, routerMiddleware(history)];
    const enhancers = [applyMiddleware(...middlewares)];

    const persistedReducer = persistReducer(persistConfig, createReducer())

    const store: any = createStore(
        persistedReducer,
        initialState,
        composeEnhancers(...enhancers)
    );

    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {};
    store.injectedSagas = {};

    return {
        store: store,
        persistor: persistStore(store)
    }
}
