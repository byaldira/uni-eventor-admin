import React, { Component } from 'react';
import '../css/w3.css';

class CreateDepartment extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
       
       return (
           <div>
             <h2>Fakülte Tanımlama</h2>
           </div>
       );
    }
}

export default CreateDepartment;

