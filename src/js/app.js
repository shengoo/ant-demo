import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
// import '../../node_modules/antd/lib/date-picker/style/index.less'


import {createStore, applyMiddleware,compose} from 'redux';
import {Provider,connect} from 'react-redux';
import reducers from './reducers';

import '../../libs/fonts/iconfont/iconfont.eot';
import '../../libs/fonts/iconfont/iconfont.svg';
import '../../libs/fonts/iconfont/iconfont.ttf';
import '../../libs/fonts/iconfont/iconfont.woff';


import 'antd/dist/antd.less';
import '../less/ant-override.less';
import '../less/scrollbar.less';
// import '../../libs/EikonWebUI-less/webui/main.less';
import '../less/style.less';


import {Banner, TopMenu, TreeMenu, MainContent, Home} from './components';
import DevTools from './components/DevTools'

import menus from './menu';


class App extends Component {

    constructor(props){
        super(props)
        console.log(this)
    }

    addTab() {

    }

    render() {
        return (
            <div className="app-container">
                <Banner/>
                {/*<div className="top-menu">*/}
                {/*<TopMenu items={menus}/>*/}
                {/*</div>*/}
                <div className="main">
                    <div className="tree-menu">
                        <TreeMenu/>
                    </div>
                    <div className="main-content">
                        <MainContent items={menus}/>
                    </div>
                </div>
                <DevTools/>
            </div>
        );
    }
}


const store = createStore(reducers,
    {lang:'en_US'},
    compose(
        DevTools.instrument()
    ));
console.log(store)
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root')
);
{/*<LocaleProvider locale={enUS}>*/}
{/*</LocaleProvider>*/}
