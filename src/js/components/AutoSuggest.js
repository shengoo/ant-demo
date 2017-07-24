import React from 'react';
import {AutoComplete} from 'antd';


function onSelect(value) {
    console.log('onSelect', value);
}

class AutoSuggest extends React.Component {
    state = {
        dataSource: [],
    }
    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

    render() {
        const {dataSource} = this.state;
        return (
            <input style={style} placeholder="Search or enter a command"/>
        )
    }

// <AutoComplete
// dataSource={dataSource}
// style={{ width: 200 }}
// onSelect={onSelect}
// onSearch={this.handleSearch}
// placeholder="Search or enter a command"
// className="auto-suggest"
// />
}

const style = {
    color: '#c2c2c2',
    outline: 0,
    boxSizing: 'border-box',
    display: 'inline-block',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#4a4a52',
    backgroundColor: '#000',
    height: 23,
    lineHeight: 15,
    padding: '3px 8px',
    margin: 0,
    fontFamily: 'ProximaNova,Arial',
    fontSize: 13,
}

export default AutoSuggest;