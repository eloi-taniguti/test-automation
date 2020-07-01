import React from 'react';
import PropTypes from 'prop-types';

import NavItem from './NavItem/NavItem';
import classes from './Navigation.module.scss';

function Navigation({ items }) {
    return (
        <nav className={classes.Navigation}>
            {items.map(({ id, link, label, onClick }) => (
                <NavItem
                    key={id || link}
                    className={classes.NavItem}
                    activeClassName={classes.ActiveNavItem}
                    link={link}
                    onClick={onClick}
                >
                    <span>{label}</span>
                </NavItem>
            ))}
        </nav>
    );
}

Navigation.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            link: PropTypes.string,
            label: PropTypes.string,
            onClick: PropTypes.func
        })
    ).isRequired
};

export default Navigation;
