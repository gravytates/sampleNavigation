'use strict'
// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
// Redux-Saga
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas/index';
// Navigation
import { NavigatorTabOne } from './navigation/tabOneNav'
import { NavigatorTabTwo } from './navigation/tabTwoNav'
import { NavigatorTabThree } from './navigation/tabThreeNav'
import { TabBar, tabBarReducer } from './navigation/tabNav'
// Middleware
const middleware = () => {
  return applyMiddleware(createLogger())
}
export default createStore(
  combineReducers({
    tabBar: tabBarReducer,
    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),
    tabTwo: (state,action) => NavigatorTabTwo.router.getStateForAction(action,state),
    tabThree: (state,action) => NavigatorTabThree.router.getStateForAction(action,state),
  }),
  middleware(),
)
