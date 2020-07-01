import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import './SignIn.scss';

import UserService from '../../../services/userService';
import i18n from '../../../configs/i18n/i18n';
import { fetchCurrentUser } from '../../../store/user/actions';

function SignIn({ form, fetchCurrentUser}) {
    const redirectToApp = () => {
        const regex = /last_page=(.*)/;
        const lastPageParam = regex.exec(window.location.href);
        if (lastPageParam && lastPageParam.length) {
            const [, lastPage] = lastPageParam;
            window.location = `${window.location.origin}${
                window.location.pathname
            }#${lastPage}`;
        } else {
            window.location = `${process.env.REACT_APP_BASE_HOST}/`;
        }
    };
    
    useEffect((currentUser) => {
        if (currentUser === null) {
            redirectToApp();
        }
    }, []);
    
    const [loginState, setLoginState] = useState({
        error: '',
        loading: false
    });

    const handleSubmit = e => {
        e.preventDefault();
        setLoginState({ loading: true, error: '' });
        form.validateFields(async (err, values) => {
            if (!err) {
                const authenticated = await UserService.authenticate(
                    values
                );
                if (authenticated) {
                    fetchCurrentUser();
                    redirectToApp();
                } else {
                    const errorMessage = i18n.t('sign_in.failed');
                    setLoginState({ error: errorMessage, loading: false });
                }
            } else {
                setLoginState({ loading: false });
            }
        });
    };

    return (
        <div className='login-page'>
            <br />
            <h1 className='title'>{i18n.t('header.title')}</h1>
            <br />
            <Form onSubmit={handleSubmit} className='login-form'>
                <p>{i18n.t('sign_in.login')}</p>
                <Form.Item>
                    {form.getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: i18n.t(
                                    'sign_in.empty_username'
                                )
                            }
                        ]
                    })(
                        <Input
                            key='username'
                            prefix={
                                <Icon type='user' className='input-icon' />
                            }
                            placeholder={i18n.t(
                                'sign_in.placeholder.username'
                            )}
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {form.getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: i18n.t(
                                    'sign_in.empty_password'
                                )
                            }
                        ]
                    })(
                        <Input
                            prefix={
                                <Icon type='lock' className='input-icon' />
                            }
                            key='password'
                            type='password'
                            placeholder={i18n.t(
                                'sign_in.placeholder.password'
                            )}
                        />
                    )}
                </Form.Item>
                <p className="error-message">{loginState.error}</p>
                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        loading={loginState.loading}
                        className='login-form-button'>
                        {i18n.t('sign_in.login_button')}
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

const SignInForm = Form.create({ name: 'normal_login' })(SignIn);

function mapStateToProps({ user: { currentUser } }) {
    return {
        currentUser
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            fetchCurrentUser
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(SignInForm));
