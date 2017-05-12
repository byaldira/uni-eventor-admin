import React, { Component } from 'react';
import '../css/w3.css';

class CreateDepartment extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
          var resizenone={
           resize : 'none'
       }
       return (
           <div>
             <h2>Bölüm Tanımlama</h2>
             <div className="w3-row w3-section">
                <div className="w3-half w3-container">
                    <select className="w3-select w3-border w3-padding" name="option">
                        <option value="" disabled selected>Üniversite Seç</option>
                        <option value="SAU54">SAU - Sakarya Üniversitesi</option>
                        <option value="KOU41">KOU - Kocaeli Üniversitesi</option>
                    </select>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                    <select className="w3-select w3-border w3-padding" name="option">
                        <option value="" disabled selected>Fakülte Seç</option>
                        <option value="SAU54">BBF - Bilgisayar ve Bilişim Bilimleri Fakültesi</option>
                        <option value="KOU41">MF - Mühendislik Fakültesi</option>
                    </select>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                    <input className="w3-input w3-border w3-padding" type="text" placeholder="Bölüm Adı" id="txtUniName"/>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                        <textarea className="w3-input w3-border w3-padding resizenone"  placeholder="Bölüm Adres"></textarea>
                </div>
            </div>
            <div className="w3-row ">
                <div className="w3-half">
                    <div className="w3-container w3-right">
                        <button className="w3-btn w3-ripple w3-green">Bölümü Ekle</button>
                    </div>
                </div>
            </div>
           </div>
       );
    }
}

export default CreateDepartment;

