import React, { Component } from 'react';
import '../css/w3.css';

class UserInterests extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('UserInterests');
        // Fill User Information from api 
    }

    render() {
       var width100  = {
           width:'100%'
       }
       return (
           <div>
             <h2>Kullanıcı Alanları</h2>
           </div>
       );
    }
}

export default UserInterests;
