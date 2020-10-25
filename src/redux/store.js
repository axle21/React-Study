import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import users from '../redux/reducer/users'

const middleware = compose(applyMiddleware(thunk, logger))



const reducers = combineReducers({
    users,
    
})

export default createStore(
    reducers,
     middleware,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  => para ndi kana mag logger basta naka install extension sa Chrome
     )