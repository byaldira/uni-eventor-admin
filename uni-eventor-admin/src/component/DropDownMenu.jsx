import React, { Component } from 'react';

class DropDownMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    callback() {
        if (this.state.isOpen) {
            this.setState({ isOpen: false });
        }
        else {
            this.setState({ isOpen: true });
        }
    }

    getStyle() {
        if (this.state.isOpen)
            return {
                display: 'block'
            };
        else
            return {
                display: 'none'
            };
    }

    render() {
        return (
            <div className="w3-row">
                <span className="w3-conainer w3-padding w3-button w3-col s12 w3-hover-blue-gray w3-blue-gray" onClick={this.callback.bind(this)}>
                    {this.props.menuName}
                </span>
                <div className="w3-container" style={this.getStyle()}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DropDownMenu;