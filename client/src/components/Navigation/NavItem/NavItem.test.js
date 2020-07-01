import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';

describe('<NavigationItem />', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
            children: 'Test Page',
            link: '/test',
            activeClassName: 'class',
            className: 'class'
        };
        wrapper = shallow(<NavItem {...props} />);
    });

    it('should render a <NavLink /> component', () => {
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });

    it('should render a button if link is empty', () => {
        wrapper.setProps({
            link: ''
        });
        expect(wrapper.find(NavLink)).toHaveLength(0);
        expect(wrapper.find('button')).toHaveLength(1);
    });
});
