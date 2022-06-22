// import { store } from './index';
// import {createSlice, configureStore} from '@reduxjs/toolkit';

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     incremented: state => {
//       state.value += 1;
//     },
//     decremented: state => {
//       state.value -= 1;
//     },
//   },
// });

// export const {incremented, decremented} = counterSlice.actions;

// export const store = configureStore({
//   reducer: counterSlice.reducer,
// });

// store.subscribe(() => console.log(store.getState()));

import {applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createStore} from '@reduxjs/toolkit';

import weatherReducers from './weatherReducers';

const rootReducer = combineReducers({
  weather: weatherReducers,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
