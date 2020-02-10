import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../../redux/reducers/index';

export const history = createBrowserHistory();

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))(createStore);

const store = createStoreWithMiddleware(reducer(history));

export default store;
