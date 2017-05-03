import React, { Component } from 'react';
import '../css/w3.css';

class Tag extends Component {
    render() {
        var cssClass = "w3-tag w3-round " + this.props.cssClass;
        var tagStyle = {
            margin: '4px'
        };
        return (
            <span className={cssClass} style={tagStyle}>
                {this.props.children}
            </span>
        );
    }
}

export default Tag;