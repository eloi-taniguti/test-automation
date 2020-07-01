import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';

import classes from './Header.module.scss';

function Header({ logo, title, titlePath, navItems, user }) {
    const { name, photo, menuItems } = user;

    const hasLogo = logo ? (
        <span>
            <img src={logo} alt="logo" className={classes.Logo} />
        </span>
    ) : (
        ''
    );

    const hasLink = titlePath ? (
        <Link to={titlePath}>{title}</Link>
    ) : (
        <span>{title}</span>
    );

    return (
        <header className={classes.Header}>
            {hasLogo}
            <div data-cy="appTitle" className={classes.Title}>
                {hasLink}
            </div>

            <div className={classes.Navigation}>
                <Navigation items={navItems} />
            </div>
            {name && (<div className={classes.CurrentUser}>
                <UserMenu name={name} menuItems={menuItems} photo={photo}/>
            </div>)}
        </header>
    );
}

export default Header;
