import React, { Component } from 'react';
import '../css/w3.css';
import * as AuthModule from '../App.Auth';
import { makeApiRequest } from '../App.Request';

class CreateDepartment extends Component {
     constructor(props) {
        super(props);
        this.state = {
            DepartmentId: '',
            DepartmentName: '',
            DepartmentAddress: '',
            FkFacultyId:''
        };
    }
    submitHandler(e) {
        e.preventDefault();
        // alert(this.refs.txtDepartmentName.value);
        // alert(this.refs.txtDepartmentAddress.value);
        // alert(this.refs.ddlFacultyId.value);

        var newDepartment = {
            DepartmentId: '',
            DepartmentName: this.refs.txtDepartmentName.value,
            DepartmentAddress: this.refs.txtDepartmentAddress.value,
            FkFacultyId:this.refs.ddlFacultyId.value
        }
        makeApiRequest('POST' , 'api/DepartmentApi' , newDepartment ,(data)=>{
            alert('Bölüm Eklendi' );
        },(error)=>{
            alert('Hata Oluştu' + error);
        });
      
    }

    handleDepartmentNameChange(event) {
        var DepartmentName = event.target.value;
        this.setState(prevState => ({
            DepartmentId : prevState.DepartmentId,
            DepartmentName: DepartmentName,
            DepartmentAddress:prevState.Address,
            FkFacultyId:prevState.FkFacultyId
        }));
    }
    handleDepartmentAddressChange(event) {
        var DepartmentAddress = event.target.value;
        this.setState(prevState => ({
             DepartmentId : prevState.DepartmentId,
            DepartmentName: prevState.DepartmentName,
            DepartmentAddress:DepartmentAddress,
            FkFacultyId:prevState.FkFacultyId
        }));
    }
    handleFkFacultyIdChange(event) {
        var FkFacultyId = event.target.value;
        this.setState(prevState => ({
            DepartmentId : prevState.DepartmentId,
            DepartmentName: prevState.DepartmentName,
            DepartmentAddress:prevState.DepartmentAddress,
            FkFacultyId:FkFacultyId
        }));
    }


    render() {
          var resizenone={
           resize : 'none'
       }
       return (
           <div>
                  <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

             <h2>Bölüm Tanımlama</h2>
             <div className="w3-row w3-section">
                <div className="w3-half w3-container">Enable False olmalı 
                    <select className="w3-select w3-border w3-padding" name="option" >
                        <option value="" disabled selected>Üniversite Seç</option>
                        <option value="SAU54">SAU - Sakarya Üniversitesi</option>
                        <option value="KOU41">KOU - Kocaeli Üniversitesi</option>
                    </select>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                    <select className="w3-select w3-border w3-padding" ref="ddlFacultyId" name="option" onChange={this.handleFkFacultyIdChange.bind(this)}>
                        <option value="" disabled selected>Fakülte Seç</option>
                        <option value="BBF">BBF - Bilgisayar ve Bilişim Bilimleri Fakültesi</option>
                        <option value="MF">MF - Mühendislik Fakültesi</option>
                    </select>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                    <input className="w3-input w3-border w3-padding"  ref="txtDepartmentName" type="text" onChange={this.handleDepartmentNameChange.bind(this)} placeholder="Bölüm Adı" id="txtUniName"/>
                </div>
            </div>
            <div className="w3-row w3-section">
                <div className="w3-container w3-half">
                        <textarea className="w3-input w3-border w3-padding "  ref="txtDepartmentAddress" style={resizenone} onChange={this.handleDepartmentAddressChange.bind(this)}   placeholder="Bölüm Adres"></textarea>
                </div>
            </div>
            <div className="w3-row ">
                <div className="w3-half">
                    <div className="w3-container w3-right">
                        <button className="w3-btn w3-ripple w3-green">Bölümü Ekle</button>
                    </div>
                </div>
            </div>
            </form> 
           </div>
       );
    }
}

export default CreateDepartment;

