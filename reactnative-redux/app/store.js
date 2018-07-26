import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../app/reducers/index';

export default createStore(reducers, applyMiddleware(thunk)); // export defaultに指定したものがApp.jsのimportでstoreに格納される
