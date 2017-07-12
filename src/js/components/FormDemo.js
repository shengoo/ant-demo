import React, {Component} from 'react';
import {AutoComplete,Cascader,Checkbox,Form,InputNumber,Radio,Select,Upload, message, Button, Icon} from 'antd';
const RadioGroup = Radio.Group;
const Option = Select.Option;

import HorizontalLoginForm from './HorizontalLoginForm';
const WrappedHorizontalLoginForm = Form.create()(HorizontalLoginForm);

import ValidateForm from './ValidateForm';

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
function handleChange(value) {
    console.log(`selected ${value}`);
}

const props = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class FormDemo extends Component {
    state = {
        dataSource: [],
        value: 1,
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
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
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
                <h1>Checkbox</h1>
                <Checkbox onChange={onChange}>Checkbox</Checkbox>
                <Checkbox checked={true}>Checked</Checkbox>
                <h1>Horizontal Login Form</h1>
                <WrappedHorizontalLoginForm/>
                <h1>ValidateForm</h1>
                <ValidateForm/>
                <h1>InputNumber</h1>
                <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                <h1>Radio</h1>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio value={1}>A</Radio>
                    <Radio value={2}>B</Radio>
                    <Radio value={3}>C</Radio>
                    <Radio value={4}>D</Radio>
                </RadioGroup>
                <h1>Select</h1>
                <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>Disabled</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <h1>Upload</h1>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload"/> Click to Upload
                    </Button>
                </Upload>
            </div>
        );
    }
}

export default FormDemo;