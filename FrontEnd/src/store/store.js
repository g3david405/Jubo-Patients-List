import {createStore,compose,applyMiddleware} from "redux";
import {Reducer} from "./reducer";
import thunk from 'redux-thunk';


const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
)
const store = createStore(Reducer,
    enhancer)

export default store;