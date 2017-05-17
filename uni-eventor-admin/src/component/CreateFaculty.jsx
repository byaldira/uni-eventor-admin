import React, { Component } from 'react';
import '../css/w3.css';

class CreateFaculty extends Component {
     constructor(props) {
        super(props);
        this.state = {
            FacultyId: '',
            FacultyName: '',
            FacultyAddress: '',
            FkUniversityId:''
        };
    }

    submitHandler(e) {
        e.preventDefault();
        alert('Fakülte Ekleme');
        // Fill User Information from api 
    }

    handleFacultyNameChange(event) {
        var FacultyName = event.target.value;
        this.setState(prevState => ({
            FacultyId : prevState.FacultyId,
            FacultyName: FacultyName,
            FacultyAddress:prevState.Address,
            FkUniversityId:prevState.Website
        }));
    }
    handleFacultyAddressChange(event) {
        var FacultyAddress = event.target.value;
        this.setState(prevState => ({
            FacultyId : prevState.FacultyId,
            FacultyName: prevState.FacultyName,
            FacultyAddress:FacultyAddress,
            FkUniversityId:prevState.Website
        }));
    }
    handleUniversityIdChange(event) {
        var UniversityId = event.target.value;
        this.setState(prevState => ({
            FacultyId : prevState.FacultyId,
            FacultyName: prevState.FacultyName,
            FacultyAddress:prevState.Address,
            FkUniversityId:UniversityId
        }));
        
    }
    render() {
        var resizenone={
           resize : 'none'
       }
       return (
           <div>
                <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

             <h2>Fakülte Tanımlama</h2>
             <div className="w3-row w3-section">
                <div className="w3-half w3-container">
                    <select className="w3-select w3-border w3-padding" name="option" onChange={this.handleUniversityIdChange.bind(this)} >
                        <option value="" disabled selected>Üniversite Seç</option>
                        <option value="SAU54">SAU - Sakarya Üniversitesi</option>
                        <option value="KOU41">KOU - Kocaeli Üniversitesi</option>
                    </select>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                    <input className="w3-input w3-border w3-padding" type="text" onChange={this.handleFacultyNameChange.bind(this)}  placeholder="Fakülte Adı" id="txtUniName"/>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                        <textarea className="w3-input w3-border w3-padding " style={resizenone} onChange={this.handleFacultyAddressChange.bind(this)} placeholder="Fakülte Adres"></textarea>
                </div>
            </div>
            <div className="w3-row ">
                <div className="w3-half">
                    <div className="w3-container w3-right">
                        <button className="w3-btn w3-ripple w3-green">Fakülteyi Ekle</button>
                    </div>
                </div>
            </div>
            </form>
           </div>
       );
    }
}

export default CreateFaculty;

