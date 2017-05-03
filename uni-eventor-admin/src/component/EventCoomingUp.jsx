import React, { Component } from 'react';
import { Link } from 'react-router';

class EventCoomingUp extends Component {
    render() {
        var imgStyle = {
            cursor: 'pointer',
            width: '80%'
        };
        var eventLink = "/event/" + this.props.id;
        return (
             <div className="w3-card-2 w3-round w3-white w3-center">
                <div className="w3-container">
                    <p>Yaklaşan Etkinlik:</p>
                     <Link to={eventLink}>
                        <img src={this.props.poster} className="w3-hover-opacity"
                            style={imgStyle} alt={this.props.title}
                            onClick={this.props.callback} />
                    </Link>
                    <p><strong>Sakarya Üniversitesi</strong></p>
                    <p>Cuma 15:00</p>
                    <p><button onClick="document.getElementById('idEvent').style.display='block'" className="w3-btn w3-btn-block w3-theme-l4">Etkinliğe Git</button></p>
                </div>
            </div>
        );
    }
}

export default EventCoomingUp;