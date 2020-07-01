import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu } from 'antd';

import classes from './UserMenu.module.scss';

import Avatar from '../Avatar/UserAvatar'

function UserMenu({ menuItems, name, photo }) {

    const buildMenuClickHandler = () => {
        return antMenuItem => {
            const { key } = antMenuItem;
            const handler = menuItems.find(
                ({ label }) => label.toLowerCase() === key
            );

            if (
                handler !== undefined &&
                typeof handler.onClick === 'function'
            ) {
                return handler.onClick(antMenuItem);
            }

            return null;
        };
    };

    const menu = (
        <Menu onClick={buildMenuClickHandler()}>
            <div className="ant-popover-arrow" />
            {menuItems.map(({ label }) => (
                <Menu.Item data-cy="userMenuItem" key={label.toLowerCase()}>
                    {label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown
            className={classes.UserMenu}
            overlay={menu}
            trigger={['click']}
        >
            <button data-cy="userButton" type="button">
                <Avatar name={name} photo={photo} />
            </button>
        </Dropdown>
    );
}

UserMenu.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func
        })
    ),
    name: PropTypes.string
};

UserMenu.defaultProps = {
    menuItems: [],
    name: ''
};

export default UserMenu;
