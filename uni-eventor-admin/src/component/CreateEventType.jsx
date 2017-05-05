import React, { Component } from 'react';
import '../css/w3.css';

class CreateEventType extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
       
       return (
           <div>
               <h2>Etkinlik Tipi</h2>
                    <div className="w3-row w3-section">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Etkinlik Tipi" id="txtEventTypeName"/>
                        </div>
                    </div>
                    <div className="w3-row ">
                        <div className="w3-half">
                            <div className="w3-container w3-right">
                                <button className="w3-btn w3-ripple w3-green">Etkinlik Tipi Ekle</button>
                            </div>
                        </div>
                    </div>
           </div>
       );
    }
}

export default CreateEventType;

