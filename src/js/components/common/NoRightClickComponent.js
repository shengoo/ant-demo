import React from 'react';

class NoRightClickComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(props.children)
    }
    render(){
        return this.props.children;
    }
}

export default NoRightClickComponent;