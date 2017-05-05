import React, { Component } from 'react';
import '../css/w3.css';

class CreateEventInterest extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
       
       return (
           <div>
               <h2>Etkinlik Alanı Tanımlama</h2>
                   <div className="w3-row w3-section">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Etkinlik Alanı Adı" id="txtEventInterestName"/>
                        </div>
                    </div>
                    
                    <div className="w3-row ">
                        <div className="w3-half">
                            <div className="w3-container w3-right">
                                <button className="w3-btn w3-ripple w3-green">Etkinlik Alanı Ekle</button>
                            </div>
                        </div>
                    </div>
           </div>
       );
    }
}

export default CreateEventInterest;

