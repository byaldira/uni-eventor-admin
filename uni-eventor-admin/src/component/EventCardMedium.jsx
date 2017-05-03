import React, { Component } from 'react';
import { Link } from 'react-router';

class EventCardMedium extends Component {
    render() {
        var imgStyle = {
            cursor: 'pointer',
            width: '100%'
        };
        var eventLink = "/event/" + this.props.id;
        return (
            <div className="w3-padding w3-third">
                <div className="w3-card-4">
                    <Link to={eventLink}>
                        <img src={this.props.poster} className="w3-hover-opacity"
                            style={imgStyle} alt={this.props.title}
                            onClick={this.props.callback} />
                    </Link>
                    <div className="w3-container w3-white">
                        <p><b>{this.props.title}</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventCardMedium;