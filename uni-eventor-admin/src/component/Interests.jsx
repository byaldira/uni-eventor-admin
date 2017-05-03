import React, { Component } from 'react';
import Tag from './Tag.jsx';
import '../css/w3.css';


class Interests extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
        return (
            <div className="w3-hide-small">
                <div className="w3-container">
                    <p className="w3-center">Interests</p>
                    <div className="w3-section">
                        {this.props.data.map(item => {
                            return <Tag key={item.id} cssClass="w3-teal">{item.text}</Tag>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Interests;