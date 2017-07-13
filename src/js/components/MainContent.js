import React, {Component} from 'react';

import {Tabs, Button, DatePicker} from 'antd';
const TabPane = Tabs.TabPane;
import {
    ButtonDemo1, PaginationDemo, FormDemo, UploadDemo, DatepickerDemo, CollapseDemo,
    TableDemo,
    Feedbacks,
    ContentBlock,
    Home,
    EchartDemo,
    OHCLDemo
} from '../components';

class MainContent extends Component {
    constructor(props) {
        super(props);console.log(props)
        this.newTabIndex = 0;
        const panes = [
            {title: 'ButtonDemo', content: <ButtonDemo1/>, key: '1'},
            {title: 'FormDemo', content: <FormDemo/>, key: 'FormDemo'},
            {title: 'PaginationDemo', content: <PaginationDemo/>, key: '3'},
            {title: 'DatepickerDemo & Calendar', content: <DatepickerDemo/>, key: 'DatePicker'},
            {title: 'Collapse & Popover', content: <CollapseDemo/>, key: 'CollapseDemo'},
            {title: 'TableDemo', content: <TableDemo/>, key: 'TableDemo'},
            {title: 'Feedbacks', content: <Feedbacks/>, key: 'Feedbacks'},
            {title: 'EchartDemo', content: <EchartDemo/>, key: 'EchartDemo'},
            {title: 'OHCLDemo', content: <OHCLDemo/>, key: 'OHCLDemo'},
        ];
        const DefaultTab = props.home || Home;
        // const panes = [
        //     {title:DefaultTab.name,content:<DefaultTab></DefaultTab>,key:DefaultTab.name}
        // ];
        this.state = {
            activeKey: 'EchartDemo',//panes[0].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({activeKey});
    }
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }
    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({title: 'New Tab', content: 'New Tab Pane', key: activeKey});
        this.setState({panes, activeKey});
    }
    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({panes, activeKey});
    }

    render() {
        return (
            <Tabs
                // hideAdd={true}
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}><ContentBlock title={pane.title}>{pane.content}</ContentBlock></TabPane>)}
            </Tabs>
        );
    }
}

export default MainContent;