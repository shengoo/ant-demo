import React from 'react';
import { Modal, Button,message ,notification,Popconfirm } from 'antd';

const success = () => {
    message.success('This is a message of success');
};

const error = () => {
    message.error('This is a message of error');
};

const warning = () => {
    message.warning('This is message of warning');
};

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

function confirm(e) {
    console.log(e);
    message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    message.error('Click on No');
}

class Feedbacks extends React.Component{
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {
        return (
            <div>
                <h1>Modal</h1>
                <Button type="primary" onClick={this.showModal}>Open</Button>
                <Modal closable={false}
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                <h1>Messages</h1>
                <div>
                    <Button onClick={success}>Success</Button>
                    <Button onClick={error}>Error</Button>
                    <Button onClick={warning}>Warning</Button>
                </div>
                <h1>Notification</h1>
                <Button type="primary" onClick={openNotification}>Open the notification box</Button>
                <h1>Popconfirm</h1>
                <Popconfirm title="Are you sure delete this task?" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                    <a href="#">Delete</a>
                </Popconfirm>
            </div>
        );
    }
}

export default Feedbacks;