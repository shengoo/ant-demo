import React from 'react';
import {Icon} from 'antd';

import {LocaleSwitch} from './common';


class BannerActions extends React.Component {
    render() {
        return (
            <div className="page-banner-actions">
                <LocaleSwitch/>
                <div className="action-panel">
                    <Icon type="bars"/>
                    <Icon type="user"/>
                    <Icon type="message"/>
                </div>
            </div>
        );
    }
}

export default BannerActions;