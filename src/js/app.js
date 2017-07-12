import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {DatePicker} from 'antd';
// import '../../node_modules/antd/lib/date-picker/style/index.less'

// import '../../libs/EikonWebUI-less/webui/main.less';
import 'antd/dist/antd.less';
import '../less/ant-override.less';
import '../less/scrollbar.less';
import '../less/style.less';


import {TopMenu, TreeMenu, MainContent} from './components';

import menus from './menu';


class App extends Component {

    addTab(){

    }

    render() {
        return (
            <div className="app-container">
                <div className="top-menu">
                    <TopMenu items={menus}/>
                </div>
                <div className="main">
                    <div className="tree-menu">
                        <TreeMenu />
                    </div>
                    <div className="main-content">
                        <MainContent home={menus[0]}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);