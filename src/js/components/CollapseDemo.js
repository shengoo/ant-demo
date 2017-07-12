import React, {Component} from 'react';
import {Collapse,Popover, Button,Tooltip } from 'antd';
const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
const tooltipText = <span>prompt text</span>;
class CollapseDemo extends Component {
    render() {
        return (
            <div>
                <h1>Collapse</h1>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    <Panel header="This is panel header 1" key="1">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3" disabled>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
                <h1>Popover</h1>
                <div>
                    <Popover content={content} title="Title" trigger="hover">
                        <Button>Hover me</Button>
                    </Popover>
                    <Popover content={content} title="Title" trigger="focus">
                        <Button>Focus me</Button>
                    </Popover>
                    <Popover content={content} title="Title" trigger="click">
                        <Button>Click me</Button>
                    </Popover>
                </div>
                <h1>Tooltip</h1>
                <div className="tooltip-demo">
                    <div style={{ marginLeft: 60 }}>
                        <Tooltip placement="topLeft" title={tooltipText}>
                            <a href="#">TL</a>
                        </Tooltip>
                        <Tooltip placement="top" title={tooltipText}>
                            <a href="#">Top</a>
                        </Tooltip>
                        <Tooltip placement="topRight" title={tooltipText}>
                            <a href="#">TR</a>
                        </Tooltip>
                    </div>
                    <div style={{ width: 60, float: 'left' }}>
                        <Tooltip placement="leftTop" title={tooltipText}>
                            <a href="#">LT</a>
                        </Tooltip>
                        <Tooltip placement="left" title={tooltipText}>
                            <a href="#">Left</a>
                        </Tooltip>
                        <Tooltip placement="leftBottom" title={tooltipText}>
                            <a href="#">LB</a>
                        </Tooltip>
                    </div>
                    <div style={{ width: 60, marginLeft: 270 }}>
                        <Tooltip placement="rightTop" title={tooltipText}>
                            <a href="#">RT</a>
                        </Tooltip>
                        <Tooltip placement="right" title={tooltipText}>
                            <a href="#">Right</a>
                        </Tooltip>
                        <Tooltip placement="rightBottom" title={tooltipText}>
                            <a href="#">RB</a>
                        </Tooltip>
                    </div>
                    <div style={{ marginLeft: 60, clear: 'both' }}>
                        <Tooltip placement="bottomLeft" title={tooltipText}>
                            <a href="#">BL</a>
                        </Tooltip>
                        <Tooltip placement="bottom" title={tooltipText}>
                            <a href="#">Bottom</a>
                        </Tooltip>
                        <Tooltip placement="bottomRight" title={tooltipText}>
                            <a href="#">BR</a>
                        </Tooltip>
                    </div>
                </div>
            </div>
        );
    }
}

export default CollapseDemo;
