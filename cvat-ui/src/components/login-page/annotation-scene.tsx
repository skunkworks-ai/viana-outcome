// Copyright (C) CVAT.ai Corporation
//
// SPDX-License-Identifier: MIT

import React from 'react';

function AnnotationScene(): JSX.Element {
    return (
        <div className='cvat-login-scene'>
            <svg
                viewBox='0 0 560 340'
                role='img'
                aria-label='Viana Outcome automatically tracking people and vehicles across video frames'
            >
                <defs>
                    <linearGradient id='cvat-login-ground' x1='0' y1='0' x2='0' y2='1'>
                        <stop offset='0' stopColor='#1B2258' stopOpacity='.9' />
                        <stop offset='1' stopColor='#0E1233' stopOpacity='.95' />
                    </linearGradient>
                    <linearGradient id='cvat-login-beam' x1='0' y1='0' x2='1' y2='0'>
                        <stop offset='0' stopColor='#8AF5FF' stopOpacity='0' />
                        <stop offset='.5' stopColor='#8AF5FF' stopOpacity='.85' />
                        <stop offset='1' stopColor='#8AF5FF' stopOpacity='0' />
                    </linearGradient>
                    <clipPath id='cvat-login-frame'>
                        <rect x='0' y='0' width='560' height='340' rx='0' />
                    </clipPath>
                </defs>

                <g clipPath='url(#cvat-login-frame)'>
                    <rect width='560' height='340' fill='#141A46' />
                    <rect y='120' width='560' height='220' fill='url(#cvat-login-ground)' />

                    <line x1='0' y1='120' x2='560' y2='120' stroke='#ffffff' strokeOpacity='.10' />
                    <g stroke='#ffffff' strokeOpacity='.055'>
                        <line x1='270' y1='120' x2='-60' y2='340' />
                        <line x1='285' y1='120' x2='240' y2='340' />
                        <line x1='300' y1='120' x2='560' y2='340' />
                        <line x1='0' y1='200' x2='560' y2='200' />
                        <line x1='0' y1='262' x2='560' y2='262' />
                    </g>

                    <g fill='#ffffff' fillOpacity='.05'>
                        <rect x='36' y='64' width='34' height='56' />
                        <rect x='80' y='84' width='22' height='36' />
                        <rect x='404' y='72' width='28' height='48' />
                        <rect x='442' y='92' width='38' height='28' />
                        <rect x='494' y='58' width='24' height='62' />
                    </g>

                    <g id='cvat-login-carB' className='cvat-login-trk'>
                        <g fill='#8E9AD6' fillOpacity='.85'>
                            <path d='M384,182 L384,168 Q384,164 389,163 L404,161 L416,150 Q419,147 424,147 L456,147 Q461,147 464,150 L474,161 L482,164 Q486,165 486,169 L486,182 Q486,185 483,185 L387,185 Q384,185 384,182 Z' />
                            <path d='M419,152 L455,152 L464,161 L410,161 Z' fill='#2B357D' fillOpacity='.9' />
                        </g>
                        <circle cx='404' cy='185' r='6' fill='#0E1233' />
                        <circle cx='466' cy='185' r='6' fill='#0E1233' />
                        <g className='cvat-login-box'>
                            <rect
                                x='376'
                                y='141'
                                width='118'
                                height='52'
                                fill='var(--cvat-login-cls-vehicle)'
                                fillOpacity='.07'
                                stroke='var(--cvat-login-cls-vehicle)'
                                strokeOpacity='.5'
                                strokeWidth='1'
                            />
                            <g stroke='var(--cvat-login-cls-vehicle)' strokeWidth='2' fill='none' strokeLinecap='square'>
                                <path d='M376,152 L376,141 L389,141' />
                                <path d='M481,141 L494,141 L494,152' />
                                <path d='M494,182 L494,193 L481,193' />
                                <path d='M389,193 L376,193 L376,182' />
                            </g>
                            <rect x='376' y='121' width='92' height='17' rx='3' fill='var(--cvat-login-cls-vehicle)' />
                            <text x='382' y='133.5' fontSize='11' fontWeight='700' fill='#0B1030'>Vehicle  0.94</text>
                        </g>
                    </g>

                    <g id='cvat-login-p1' className='cvat-login-trk'>
                        <g className='cvat-login-body' fill='#C7D0F0'>
                            <circle cx='163' cy='199' r='7.4' />
                            <path d='M163,208 c-5.4,0-8.6,3.2-8.6,7.6 v15.4 c0,2.2 1.1,3.3 3.2,3.4 l0,22.6 c0,1.7 1,2.6 2.4,2.6 h1.8 c1.4,0 2.4,-.9 2.4,-2.6 v-14.4 h1.6 v14.4 c0,1.7 1,2.6 2.4,2.6 h1.8 c1.4,0 2.4,-.9 2.4,-2.6 l0,-22.6 c2.1,-.1 3.2,-1.2 3.2,-3.4 v-15.4 c0,-4.4 -3.2,-7.6 -8.6,-7.6 z' />
                        </g>
                        <g className='cvat-login-box'>
                            <rect
                                x='146'
                                y='188'
                                width='34'
                                height='78'
                                fill='var(--cvat-login-cls-person)'
                                fillOpacity='.07'
                                stroke='var(--cvat-login-cls-person)'
                                strokeOpacity='.5'
                                strokeWidth='1'
                            />
                            <g stroke='var(--cvat-login-cls-person)' strokeWidth='2' fill='none' strokeLinecap='square'>
                                <path d='M146,199 L146,188 L157,188' />
                                <path d='M169,188 L180,188 L180,199' />
                                <path d='M180,255 L180,266 L169,266' />
                                <path d='M157,266 L146,266 L146,255' />
                            </g>
                            <rect x='146' y='168' width='88' height='17' rx='3' fill='var(--cvat-login-cls-person)' />
                            <text x='152' y='180.5' fontSize='11' fontWeight='700' fill='#2A1C00'>Person  0.98</text>
                        </g>
                    </g>

                    <g id='cvat-login-p2' className='cvat-login-trk'>
                        <g className='cvat-login-body' fill='#A9B4E2'>
                            <circle cx='300' cy='205' r='6.2' />
                            <path d='M300,213 c-4.6,0-7.3,2.7-7.3,6.4 v13 c0,1.9 .9,2.8 2.7,2.9 l0,19 c0,1.4 .8,2.2 2,2.2 h1.5 c1.2,0 2,-.8 2,-2.2 v-12.1 h1.4 v12.1 c0,1.4 .8,2.2 2,2.2 h1.5 c1.2,0 2,-.8 2,-2.2 l0,-19 c1.8,-.1 2.7,-1 2.7,-2.9 v-13 c0,-3.7 -2.7,-6.4 -7.3,-6.4 z' />
                        </g>
                        <g className='cvat-login-box'>
                            <rect
                                x='285'
                                y='195'
                                width='30'
                                height='66'
                                fill='var(--cvat-login-cls-person)'
                                fillOpacity='.07'
                                stroke='var(--cvat-login-cls-person)'
                                strokeOpacity='.5'
                                strokeWidth='1'
                            />
                            <g stroke='var(--cvat-login-cls-person)' strokeWidth='2' fill='none' strokeLinecap='square'>
                                <path d='M285,205 L285,195 L295,195' />
                                <path d='M305,195 L315,195 L315,205' />
                                <path d='M315,251 L315,261 L305,261' />
                                <path d='M295,261 L285,261 L285,251' />
                            </g>
                            <rect x='285' y='175' width='88' height='17' rx='3' fill='var(--cvat-login-cls-person)' />
                            <text x='291' y='187.5' fontSize='11' fontWeight='700' fill='#2A1C00'>Person  0.91</text>
                        </g>
                    </g>

                    <g id='cvat-login-carA' className='cvat-login-trk'>
                        <g fill='#DCE3FA'>
                            <path d='M22,300 L22,278 Q22,272 29,270 L52,266 L72,242 Q76,237 84,237 L136,237 Q144,237 148,242 L164,266 L172,269 Q178,271 178,278 L178,300 Q178,305 172,305 L28,305 Q22,305 22,300 Z' />
                            <path d='M86,244 L134,244 L148,266 L70,266 Z' fill='#2B357D' />
                            <rect x='26' y='281' width='12' height='7' rx='2' fill='#FFE9A8' />
                            <rect x='162' y='281' width='12' height='7' rx='2' fill='#FF8FA8' />
                        </g>
                        <circle cx='56' cy='303' r='12' fill='#0E1233' />
                        <circle cx='56' cy='303' r='5' fill='#3A62BE' />
                        <circle cx='146' cy='303' r='12' fill='#0E1233' />
                        <circle cx='146' cy='303' r='5' fill='#3A62BE' />
                        <g className='cvat-login-box'>
                            <rect
                                x='14'
                                y='230'
                                width='174'
                                height='85'
                                fill='var(--cvat-login-cls-vehicle)'
                                fillOpacity='.07'
                                stroke='var(--cvat-login-cls-vehicle)'
                                strokeOpacity='.5'
                                strokeWidth='1'
                            />
                            <g stroke='var(--cvat-login-cls-vehicle)' strokeWidth='2.4' fill='none' strokeLinecap='square'>
                                <path d='M14,244 L14,230 L28,230' />
                                <path d='M174,230 L188,230 L188,244' />
                                <path d='M188,301 L188,315 L174,315' />
                                <path d='M28,315 L14,315 L14,301' />
                            </g>
                            <rect x='14' y='209' width='100' height='18' rx='3' fill='var(--cvat-login-cls-vehicle)' />
                            <text x='20' y='222' fontSize='11.5' fontWeight='700' fill='#0B1030'>Vehicle  0.99</text>
                        </g>
                    </g>

                    <rect
                        className='cvat-login-sweep'
                        x='0'
                        y='0'
                        width='40'
                        height='340'
                        fill='url(#cvat-login-beam)'
                    />

                    <g>
                        <rect
                            x='466'
                            y='16'
                            width='78'
                            height='26'
                            rx='13'
                            fill='#0B1030'
                            fillOpacity='.62'
                            stroke='#ffffff'
                            strokeOpacity='.16'
                        />
                        <text x='480' y='33.5' fontSize='11.5' fontWeight='700' fill='#ffffff' fillOpacity='.92'>
                            4 TRACKS
                        </text>
                    </g>

                    <g>
                        <rect x='0' y='306' width='560' height='34' fill='#0B1030' fillOpacity='.55' />
                        <rect x='52' y='321' width='456' height='4' rx='2' fill='#ffffff' fillOpacity='.18' />
                        <rect className='cvat-login-progress' x='52' y='321' width='0' height='4' rx='2' fill='#4FC2F6' />
                        <g className='cvat-login-playhead'>
                            <circle cx='52' cy='323' r='5' fill='#8AF5FF' />
                        </g>
                        <text x='16' y='327' fontSize='10.5' fontWeight='700' fill='#ffffff' fillOpacity='.72'>
                            FRAME
                        </text>
                        <text x='518' y='327' fontSize='10.5' fontWeight='700' fill='#ffffff' fillOpacity='.72'>
                            0600
                        </text>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default React.memo(AnnotationScene);
