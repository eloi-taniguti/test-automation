import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import createAppStore from './store';
import App from './app/App/App';

import './sass/base/_reset.scss';

const history = createBrowserHistory();
const store = createAppStore(history);

const app = <App store={store} history={history} />;

ReactDOM.render(app, document.getElementById('root'));
