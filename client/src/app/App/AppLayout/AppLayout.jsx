import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    HashRouter,
    Route,
    Switch,
    StaticRouter,
    withRouter
} from 'react-router-dom';

import classes from './AppLayout.module.scss';

import SignIn from '../SignIn/SignIn';
import AppHeader from '../AppHeader/AppHeader';
import Dashboard from '../Dashboard/Dashboard';
import Page1 from '../Page1/Page1';
import Page2 from '../Page2/Page2';
import Page3 from '../Page3/Page3';

import NotFound from '../../NotFound/NotFound';

import Footer from '../../../components/Footer/Footer';

import { version } from '../../../../package.json';
import { fetchCurrentUser } from '../../../store/user/actions';

class AppLayout extends Component {
    componentDidMount() {
        const { fetchCurrentUser, currentUser } = this.props;

        if (currentUser === null) {
            fetchCurrentUser();
        }
    }

    render() {
        const { routes } = this.props;
        return (
            <HashRouter>
                <div>
                    <AppHeader />
                    <main className={classes.Main}>
                        <Switch>
                            <Route
                                path="/sign_in"
                                render={() => <SignIn />}
                                exact
                            />
                            {routes.map(({ path, render }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    render={render}
                                    exact
                                />
                            ))}
                            <StaticRouter
                                location="%PUBLIC_URL%/help/index.html"
                                context={{}}
                            />
                        </Switch>
                    </main>
                    <Footer version={version} />
                </div>
            </HashRouter>
        );
    }
}

function mapStateToProps({ user: { currentUser } }) {
    const routes = [
        {
            path: '/page1',
            render: () => <Page1 />
        },
        {
            path: '/page2',
            render: () => <Page2 />
        },
        {
            path: '/page3',
            render: () => <Page3 />
        },
        {
            path: '/',
            render: () => <Dashboard />
        },
        {
            path: '*',
            render: () => <NotFound />
        }
    ];

    return {
        routes,
        currentUser
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchCurrentUser
        },
        dispatch
    );
}

const Connected = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppLayout);

export default withRouter(Connected);
