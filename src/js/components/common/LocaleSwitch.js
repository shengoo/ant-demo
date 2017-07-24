import React from 'react';
import enUS from 'antd/lib/locale-provider/en_US';
import {Radio} from 'antd';

class LocaleSwitch extends React.Component{
    constructor() {
        super();
        this.state = {
            locale: enUS,
        };
    }
    changeLocale = (e) => {
        const localeValue = e.target.value;
        this.setState({ locale: localeValue });
        if (!localeValue) {
            // moment.locale('zh-cn');
        } else {
            // moment.locale('en');
        }
    }
    render(){
        return (
            <div>
                <Radio.Group defaultValue={enUS} onChange={this.changeLocale}>
                    <Radio.Button key="en" value={enUS}>English</Radio.Button>
                    <Radio.Button key="cn">中文</Radio.Button>
                </Radio.Group>
            </div>
        )
    }
}

export default LocaleSwitch;