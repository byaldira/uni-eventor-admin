import React, { Component } from 'react';
import '../css/w3.css';

class CreateUserRole extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('CreateUserRole');
        // Fill User Information from api 
    }

    render() {
       
       return (
           <div>
              <h2>Kullanici Rol</h2>
                    <div className="w3-row w3-section">
                        <div className="w3-threequarter">
                            <div className="w3-container w3-quarter">
                                <input className="w3-input w3-border w3-padding" type="text" placeholder="Kullanicı Adi" id="txtUserName"/>
                            </div>
                            <div className="w3-container w3-threequarter">
                                <select className="w3-select w3-border w3-padding" name="option">
                                <option value="" disabled selected>Role Seç</option>
                                <option value="SAU54">EVNT_SPR</option>
                                <option value="KOU41">EVNT_USR</option>
                                <option value="KOU41">EVNT_CMYKL</option>
                                <option value="KOU41">EVNT_ACMYKL</option>
                                <option value="KOU41">EVNT_UNYKL</option>
                            </select>
                            </div>
                        </div>
                    <div className="w3-quarter"></div>	
                    
                    </div>
                    
                    <div className="w3-row ">
                        <div className="w3-threequarter">
                            <div className="w3-container w3-right">
                                <button className="w3-btn w3-ripple w3-green">Rol Ekle</button>
                            </div>
                        </div>
                    </div>
                    
                        <br></br>
                    
           </div>
       );
    }
}

export default CreateUserRole;

