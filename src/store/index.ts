import { createStore, applyMiddleware, AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import rootReducer from '../reducers';

export type AppDispatch = typeof store.dispatch;
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

export type ReduxState = ReturnType<typeof rootReducer>;
export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
