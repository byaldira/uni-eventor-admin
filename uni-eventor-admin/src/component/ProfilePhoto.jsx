import React, { Component } from 'react';
import '../css/w3.css';


class ProfilePhoto extends Component {
    render() {
        var imgStyle = {
            width: '100%'
        };
        return (
            <div className="w3-padding">
                <div className="w3-card-4 w3-round w3-white">
                    <img style={imgStyle} src={this.props.image} alt={this.props.imgAlt} />
                    <div className="w3-container">
                        <h4 className="w3-center">{this.props.fullname}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePhoto;