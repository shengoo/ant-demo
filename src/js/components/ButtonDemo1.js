import React, {Component} from 'react';

import {Button, Radio, Icon} from 'antd';
const ButtonGroup = Button.Group;

class ButtonDemo1 extends Component {
    state = {
        size: 'default',
    };
    handleSizeChange = (e) => {
        this.setState({size: e.target.value});
    }

    render() {
        return (
            <div>
                <h1>Basic</h1>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                {/*<Button type="danger">Danger</Button>*/}
                <Button disabled>Default(disabled)</Button>
                {/*<Button readonly>Read Only</Button>*/}
                <h1>Icon button</h1>
                <div>
                    <Button type="primary" shape="circle" icon="search"/>
                    <Button type="primary" icon="search">Search</Button>
                    <Button shape="circle" icon="search"/>
                    <Button icon="search">Search</Button>
                    <br />
                    <Button shape="circle" icon="search"/>
                    <Button icon="search">Search</Button>
                    <Button type="dashed" shape="circle" icon="search"/>
                    <Button type="dashed" icon="search">Search</Button>
                </div>

                <h1>Radio buttons</h1>
                <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <h4>Basic</h4>
                <ButtonGroup>
                    <Button>Cancel</Button>
                    <Button type="primary">OK</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button disabled>L</Button>
                    <Button disabled>M</Button>
                    <Button disabled>R</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary">L</Button>
                    <Button>M</Button>
                    <Button>M</Button>
                    <Button type="dashed">R</Button>
                </ButtonGroup>

                <h4>With Icon</h4>
                <ButtonGroup>
                    <Button type="primary">
                        <Icon type="left"/>Go back
                    </Button>
                    <Button type="primary">
                        Go forward<Icon type="right"/>
                    </Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button type="primary" icon="cloud"/>
                    <Button type="primary" icon="cloud-download"/>
                </ButtonGroup>
            </div>
        );
    }
}

export default ButtonDemo1;