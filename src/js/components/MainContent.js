import React, {Component} from 'react';

import {Tabs, Button, DatePicker} from 'antd';
const TabPane = Tabs.TabPane;
import {ButtonDemo1,PaginationDemo,FormDemo,UploadDemo,DatepickerDemo,CollapseDemo,
    TableDemo,
    Feedbacks} from '../components';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            {title: 'ButtonDemo', content: <ButtonDemo1/>, key: '1'},
            {title: 'FormDemo', content: <FormDemo/>, key: '2'},
            {title: 'PaginationDemo', content: <PaginationDemo/>, key: '3'},
            {title: 'DatepickerDemo & Calendar', content: <DatepickerDemo/>, key: 'DatePicker'},
            {title: 'Collapse & Popover', content: <CollapseDemo/>, key: 'CollapseDemo'},
            {title: 'TableDemo', content: <TableDemo/>, key: 'TableDemo'},
            {title: 'Feedbacks', content: <Feedbacks/>, key: 'Feedbacks'},
        ];
        this.state = {
            activeKey: panes[0].key,
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
                onChange={this.onChange}
                activeKey={this.state.activeKey}
                type="editable-card"
                onEdit={this.onEdit}
            >
                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
            </Tabs>
        );
    }
}

export default MainContent;