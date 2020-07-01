/* eslint react/prop-types: off */
/* eslint react/prefer-stateless-function: off */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import AppLayout from './AppLayout/AppLayout';

class App extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <AppLayout />
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
