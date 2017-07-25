import React from 'react';
import {Icon} from 'antd';

import {LocaleSwitch} from './common';
import Login from './Login'


class BannerActions extends React.Component {
    render() {
        return (
            <div className="page-banner-actions">
                {/*<LocaleSwitch/>*/}
                <Login/>
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