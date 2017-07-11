import React, {Component} from 'react';

import {Menu, Icon} from 'antd';
const {SubMenu,MenuItemGroup,Item} = Menu;

class TopMenu extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    state = {
        current: 'item1',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.keyPath[e.keyPath.length - 2],
        });
    }
    handleTitleClick = (e) => {
        console.log('click title', e);
        this.setState({
            current: e.key,
        });
    }
    selectSubmenu = e => {
        console.log('selectSubmenu', e);
    }



    render() {
        return (
            <Menu selectable={true}
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  onSelect={this.selectSubmenu}
                  mode="horizontal"
            >
                {this._renderMenu()}
            </Menu>
        );
    }

    _renderMenu(){
        const loop = data => {
            const result = [];
            for(const key in data){
                const item = data[key];
                if(Array.isArray(item)){
                    result.push(( <SubMenu key={key} title={key}>
                        {item.map(i=>loop(i))}
                    </SubMenu>));
                }else{
                    result.push(( <Item key={key}>{key}</Item>));
                }
            }
            return result;
        }
        return(
            loop(this.props.items)
        );
    }
}

export default TopMenu;