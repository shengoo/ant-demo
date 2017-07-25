import React from 'react';
import {Icon} from 'antd';

import {LocaleSwitch} from './common';
import Login from './Login'
import LoginStatus from './LoginStatus'


class BannerActions extends React.Component {
    render() {
        return (
            <div className="page-banner-actions">
                {/*<LocaleSwitch/>*/}
                <LoginStatus/>
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