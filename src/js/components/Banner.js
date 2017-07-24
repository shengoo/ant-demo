import React from 'react';
import {NoRightClickComponent} from './common';
import {AutoSuggest} from './'
import BannerActions from './BannerActions';

import image from '../../assets/eikon.png';

class Banner extends React.Component {
    render() {
        return (
            <div className="page-banner noSelection">
                <i className="heliosBtn">
                    <img src={image} className="app-logo" alt="logo" />
                </i>
                <div className="contextWrapper">
                    <AutoSuggest/>
                </div>
                <BannerActions/>
            </div>
        );
    }
}

export default Banner;
