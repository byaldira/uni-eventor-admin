import React, { Component } from 'react';
import '../css/w3.css';
import { Link } from 'react-router';

class CommingUpEvent extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
        var imgStyle = {
            cursor: 'pointer',
            width: '100%'
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
                <p><strong>Holiday</strong></p>
                <p>Friday 15:00</p>
                <p><button onclick="document.getElementById('idEvent').style.display='block'" class="w3-btn w3-btn-block w3-theme-l4">Info</button></p>
           
        
            </div>
        </div>
        
        );
    }
}

export default CommingUpEvent;

