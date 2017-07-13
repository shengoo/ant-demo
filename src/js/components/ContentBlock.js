import React from 'react';
import PropTypes from 'prop-types';

class ContentBlock extends React.Component{
    render(){
        return(
            <div style={styles.contentBlock}>
                <header style={styles.header}>
                    <h6 style={styles.headerText}>{this.props.title}</h6>
                </header>
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ContentBlock.propTypes = {
    title: PropTypes.string.isRequired
};
ContentBlock.defaultProps = {
    title: 'no title'
};

const styles = {
    contentBlock:{
        backgroundColor:'#1a1a1c',
        // padding:5
    },
    header:{
        backgroundColor:'#4a4a52',
        position:'relative',
        height: 29,
        minHight:29,
        padding:'0 10px'
    },
    headerText:{
        lineHeight:'29px',
        margin:0,
        fontSize:13
    },
    content:{
        padding:'6px 10px'
    }
};

export default ContentBlock;