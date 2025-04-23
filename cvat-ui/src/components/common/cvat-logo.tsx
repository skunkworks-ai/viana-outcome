// Copyright (C) CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';
import { useSelector } from 'react-redux';
import { CombinedState } from 'reducers';

// import vianaLogo from './../../assets/viana-logo.png';
import outcomeLogo from './../../assets/outcome-logo-3f.png';

function CVATLogo(): JSX.Element {
    const logo = useSelector((state: CombinedState) => state.about.server.logoURL);

    return (
        <div className='cvat-logo-icon'>
            <img src={outcomeLogo} alt="Viana CVAT" />
            {/* <img src={logo} alt='CVAT Logo' /> */}
        </div>
    );
}

export default React.memo(CVATLogo);
