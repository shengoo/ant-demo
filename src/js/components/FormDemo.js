import React, {Component} from 'react';
import {AutoComplete,Cascader} from 'antd';

function onSelect(value) {
    console.log('onSelect', value);
}

const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];

function onChange(value) {
    console.log(value);
}


class FormDemo extends Component {
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
            <div>
                <h1>AutoComplete</h1>
                <AutoComplete
                    dataSource={dataSource}
                    style={{width: 200}}
                    onSelect={onSelect}
                    onSearch={this.handleSearch}
                    placeholder="input here"
                />
                <h1>Cascader</h1>
                <Cascader options={options} onChange={onChange} placeholder="Please select" />
            </div>
        );
    }
}

export default FormDemo;