// Copyright (C) CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import './styles.scss';
import React from 'react';
import CVATLogo from 'components/common/cvat-logo';
import AnnotationScene from './annotation-scene';

interface LoginLayoutProps {
    children: React.ReactNode;
}

function LoginLayout(props: LoginLayoutProps): JSX.Element {
    const { children } = props;
    const year = new Date().getFullYear();

    return (
        <div className='cvat-login-page'>
            <section className='cvat-login-brand' aria-label='Brand'>
                <div className='cvat-login-brand-logo'>
                    <CVATLogo />
                </div>

                <div className='cvat-login-brand-main'>
                    <AnnotationScene />
                    <div className='cvat-login-brand-body'>
                        <div className='cvat-login-rule' aria-hidden='true' />
                        <h2 className='cvat-login-lede'>Image, Video and 3D Annotation</h2>
                        <p className='cvat-login-tagline'>
                            Label and track objects across images, video and 3D data, then export
                            review-ready datasets to train your computer vision and machine learning models.
                        </p>
                    </div>
                </div>

                <div className='cvat-login-brand-foot'>
                    <span className='cvat-login-byline'>Viana&trade; by meldCX&reg;</span>
                    <span>
                        &copy;
                        {' '}
                        {year}
                        {' '}
                        meldCX&reg;. All rights reserved.
                    </span>
                </div>
            </section>

            <main className='cvat-login-form-panel'>
                {children}
            </main>
        </div>
    );
}

export default React.memo(LoginLayout);
