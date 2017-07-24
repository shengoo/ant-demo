import React from 'react';
import {Icon} from 'antd';


class BannerActions extends React.Component {
    render() {
        return (
            <div className="page-banner-actions">
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