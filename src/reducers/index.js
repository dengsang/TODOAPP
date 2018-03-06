/**
 * Created by DENG on 3/2/2018.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
 
const todoApp = combineReducers({
    todos,
    visibilityFilter
});
 
export default todoApp;