import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import i18n from '../../../configs/i18n/i18n';
import Header from '../../../components/Header/Header';
import { signOut } from '../../../store/user/actions';

import logo from '../../../assets/img/venturus_logo_header.png';


function AppHeader({ currentUser, onSignOutClick }) {

    const { name, photo } = currentUser || '';
   
    let titleUrl;
    const links = [];
    const menuItems = [];


    if (currentUser) {

        titleUrl='/';
        // Header Label and Links
        links.push (
            {
                link: '/page1',
                label: 'Page 1'
            },
            {
                link: '/page2',
                label: 'Page 2'
            },
            {
                link: '/page3',
                label: 'Page 3'
            }
        );
        // User popover options and actions
        menuItems.push (
            {
                label: i18n.t('general.user_preference'),
            },
            {
                label: i18n.t('general.help'),
            },
            {
                label: i18n.t('general.sign_out'),
                onClick: onSignOutClick
            }
        );
    }


    return (
        <Header
            logo={logo}
            title={i18n.t('header.title')}
            titlePath={titleUrl}
            navItems={links}
            user={{
                name,
                photo,
                menuItems
            }}
        />
    );
}

function mapDispatchToProps(dispatch, { history }) {
    return {
        onSignOutClick: () => {
            dispatch(signOut(history));
        }
    };
}

function mapStateToProps({ user: { currentUser } }) {
    return {
        currentUser
    };
}

const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppHeader);

export default withRouter(Connected);
