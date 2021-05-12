import { combineReducers, createStore, Reducer } from 'redux';
import { breweries } from './reducers';

const rootReducer: Reducer = combineReducers({
  breweries,
});

export type AppState = ReturnType<typeof rootReducer>;

export default createStore(rootReducer);