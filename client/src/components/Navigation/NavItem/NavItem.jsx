import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationItem({
    activeClassName,
    className,
    children,
    exact,
    link,
    onClick
}) {
    if (link.length > 0) {
        return (
            <NavLink
                to={link}
                exact={exact}
                className={className}
                activeClassName={activeClassName}
                data-cy="navLink"
            >
                {children}
            </NavLink>
        );
    }

    return (
        <button type="button" className={className} onClick={onClick}>
            {children}
        </button>
    );
}

NavigationItem.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

NavigationItem.defaultProps = {
    exact: false,
    className: '',
    activeClassName: '',
    onClick: () => {}
};

export default NavigationItem;
