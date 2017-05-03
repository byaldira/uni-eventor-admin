import React, { Component } from 'react';
import '../css/w3.css';

class CardSection extends Component {
    render() {
        return (
            <div className="w3-row w3-section">
                <div className={this.props.cardClass}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default CardSection;