import React, { Component } from 'react';

import {Home,ButtonDemo2,ButtonDemo1,PaginationDemo} from './components'

export default {
    'Home':<Home />,
    'General':[
        {
            'Button':[
                {
                    'ButtonDemo1':<ButtonDemo1/>
                }
            ]
        },
        {
            'Icon' : <Home/>
        }
    ],
    'Navigation':[{'Pagination':<PaginationDemo/>}]
};