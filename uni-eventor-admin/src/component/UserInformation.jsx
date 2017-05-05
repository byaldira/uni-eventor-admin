import React, { Component } from 'react';
import '../css/w3.css';

class UserInformation extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('UserInformation');
        // Fill User Information from api 
    }

    render() {
       var width100  = {
           width:'100%'
       }
       return (
           <div>
              <h2>Kullanici Bilgilerim </h2>

                <div className="w3-threequarter">
                    <div className="w3-row w3-section">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="UserName" id="txtUniName"/>
                        </div>
                        <div className="w3-half">
                            <div className="w3-container">
                                <input className="w3-input w3-border w3-padding" type="text" placeholder="Email" id="txtUniName"/>
                            </div>
                        </div>
                    </div>
                
                    <div className="w3-row w3-section">
                        <div className="w3-half">
                            <div className="w3-container">
                                <input className="w3-input w3-border w3-padding" type="text" placeholder="Name" id="txtUniName"/>
                            </div>
                        </div>
                        <div className="w3-half">
                            <div className="w3-container">
                                <input className="w3-input w3-border w3-padding" type="text" placeholder="SurName" id="txtUniName"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w3-row w3-section">
                        <div className="w3-half">
                            <div className="w3-container">
                                <select className="w3-select w3-border w3-padding" name="option">
                                <option value="" disabled selected>Üniversite Seç</option>
                                <option value="SAU54">SAU - Sakarya Üniversitesi</option>
                                <option value="KOU41">KOU - Kocaeli Üniversitesi</option>
                            </select>
                            </div>
                        </div>
                        <div className="w3-half">
                            <div className="w3-container">
                                <select className="w3-select w3-border w3-padding" name="option">
                                <option value="" disabled selected>Fakülte Seç</option>
                                <option value="SAU54">BBF -Bilgisayar ve Bilişim Bilimleri Fakültesi</option>
                                <option value="KOU41">MF - Mühendislik Fakültesi </option>
                            </select>
                            </div>
                        </div>
                    </div>
                
                    <div className="w3-row ">
                        <div className="w3-threequarter">
                            <div className="w3-container w3-right">
                                <button className="w3-btn w3-ripple w3-green">Guncelle</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-quarter">
                    <div className="w3-card-2" style={width100}>
                        <img src="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png" className="w3-hover-opacity " alt="Person" style={width100}/>
                        <div className="w3-container">
                        <h4><b>Profil Resmi</b></h4>
                        
                        </div>
                    </div>
                </div>
                <br></br>
           </div>
       );
    }
}

export default UserInformation;

