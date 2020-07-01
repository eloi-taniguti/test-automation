import React from 'react';
import { createBrowserHistory } from 'history';
import App from './App';
import AppLayout from './AppLayout/AppLayout';

const history = createBrowserHistory();

describe('<App />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App history={history} />);
        expect(wrapper.find(AppLayout)).toHaveLength(1);
    });
});
