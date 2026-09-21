// Copyright (C) 2020-2022 Intel Corporation
// Copyright (C) CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

import { CombinedState } from 'reducers';
import { useAuthQuery, usePlugins } from 'utils/hooks';

export interface LoginData {
    credential: string;
    password: string;
}

interface Props {
    renderResetPassword: boolean;
    renderRegistrationComponent: boolean;
    renderBasicLoginComponent: boolean;
    fetching: boolean;
    onSubmit(loginData: LoginData): void;
}

function LoginFormComponent(props: Props): JSX.Element {
    const {
        fetching, onSubmit, renderResetPassword, renderRegistrationComponent, renderBasicLoginComponent,
    } = props;

    const authQuery = useAuthQuery();
    const [form] = Form.useForm();
    const pluginsToRender = usePlugins(
        (state: CombinedState) => state.plugins.components.loginPage.loginForm,
        props,
        { credential: '' },
    );

    const credentialWatch = Form.useWatch('credential', form) || '';
    let resetSearch = authQuery ? new URLSearchParams(authQuery).toString() : '';
    if (credentialWatch.includes('@')) {
        const updatedAuthQuery = authQuery ? { ...authQuery, email: credentialWatch } : { email: credentialWatch };
        resetSearch = new URLSearchParams(updatedAuthQuery).toString();
    }

    return (
        <div className='cvat-login-form-wrapper'>
            <h1 className='cvat-login-title'>Sign In</h1>
            <p className='cvat-login-sub'>Welcome back. Sign in to continue to your workspace.</p>

            <Form
                className='cvat-login-form'
                form={form}
                layout='vertical'
                requiredMark={false}
                onFinish={(loginData: LoginData) => {
                    onSubmit(loginData);
                }}
            >
                {renderBasicLoginComponent && (
                    <>
                        <Form.Item
                            className='cvat-credentials-form-item'
                            name='credential'
                            label='Email or username'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please specify an email or username',
                                },
                            ]}
                        >
                            <Input
                                className='cvat-login-input'
                                id='credential'
                                autoComplete='username'
                                placeholder='you@meldcx.com'
                            />
                        </Form.Item>

                        <Form.Item
                            className='cvat-credentials-form-item'
                            name='password'
                            label='Password'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please specify a password',
                                },
                            ]}
                        >
                            <Input.Password
                                className='cvat-login-input'
                                id='password'
                                autoComplete='current-password'
                                placeholder='Enter your password'
                            />
                        </Form.Item>

                        {renderResetPassword && (
                            <div className='cvat-login-form-row'>
                                <div className='cvat-credentials-link'>
                                    <Link to={{ pathname: '/auth/password/reset', search: resetSearch }}>
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        )}

                        <Form.Item>
                            <Button
                                className='cvat-credentials-action-button'
                                type='primary'
                                loading={fetching}
                                htmlType='submit'
                            >
                                Sign In
                            </Button>
                        </Form.Item>
                    </>
                )}

                {!!pluginsToRender.length && (
                    <>
                        {renderBasicLoginComponent && <div className='cvat-login-divider'>or</div>}
                        <div className='cvat-login-plugins'>
                            {pluginsToRender.map(({ component: Component }, index) => (
                                <Component
                                    targetProps={props}
                                    targetState={{ credential: credentialWatch }}
                                    key={index}
                                />
                            ))}
                        </div>
                    </>
                )}
            </Form>

            {renderRegistrationComponent && (
                <p className='cvat-login-foot'>
                    New user?
                    {' '}
                    <Link to={{
                        pathname: '/auth/register',
                        search: authQuery ? new URLSearchParams(authQuery).toString() : '',
                    }}
                    >
                        Create an account
                    </Link>
                </p>
            )}
        </div>
    );
}

export default React.memo(LoginFormComponent);
