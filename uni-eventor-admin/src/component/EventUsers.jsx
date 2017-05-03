import React, { Component } from 'react';
import { Link } from 'react-router';

class EventUsers extends Component {
    render() {
        var imgStyle = {
            cursor: 'pointer',
            width: '50%'
        };
        var eventUserss = [
            {
              	"UserName": "byaldira",
                "Email": "g131210014@sakaryaa.edu.tr",
                "Name": "Cemi",
                "Surname": "Ceminayi",
                "DepartmentId": 1,
                "PhotoUrl" : "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png"
            },
            {
              	"UserName": "esakarsu",
                "Email": "g131210014@sakaryaa.edu.tr",
                "Name": "Cemi",
                "Surname": "Ceminayi",
                "DepartmentId": 1,
                "PhotoUrl" : "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png"
           
            },
            {
               	"UserName": "yupe",
                "Email": "g131210014@sakaryaa.edu.tr",
                "Name": "Cemi",
                "Surname": "Ceminayi",
                "DepartmentId": 1,
                "PhotoUrl" : "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png"
           
            },
            {
                "UserName": "byilma",
                "Email": "g131210014@sakaryaa.edu.tr",
                "Name": "Cemi",
                "Surname": "Ceminayi",
                "DepartmentId": 1,
                "PhotoUrl" : "http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png"
           
            }
        ];
        var eventLink = "/profile/";
        return (
           <div className="w3-card-2 w3-round w3-white w3-center">
            <div className="w3-container">
                <p>Bu Etkinliğe Gidenler</p>
                    {eventUserss.map(function(object , i ){
                       return(  [
                            <Link to={eventLink+object.UserName}>
                            <img src={object.PhotoUrl} className="w3-hover-opacity"
                                style={imgStyle} alt="asdf" />
                        </Link>,
                        <br></br>,
                        <span>{object.UserName}</span>,
                        <br></br>]
                       );   
                     })} 
                </div>
            </div>
        );
    }
}

export default EventUsers;