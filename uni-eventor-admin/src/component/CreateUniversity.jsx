import React, { Component } from 'react';
import '../css/w3.css';
import * as AuthModule from '../App.Auth';
import { makeApiRequest } from '../App.Request';

class CreateUniversity extends Component {
     constructor(props) {
        super(props);
        this.state = {
            UniversityId: '',
            UniversityName: '',
            Address: '',
            Website:''
        };
         AuthModule.login('testuser', 'Cem.123', () => {
                alert('Giriş yapıldı')
        }, (error) => {
                alert('failed');
            });
    }

    submitHandler(e) {
        e.preventDefault();
        
        // alert(this.refs.txtUniversityCode.value);
        // alert(this.refs.txtUniversityName.value);
        // alert(this.refs.txtWebSite.value);
        // alert(this.refs.txtUniversityAddress.value);

        var newUniversity = {
             UniversityId: this.refs.txtUniversityCode.value,
            UniversityName: this.refs.txtUniversityName.value,
            Address: this.refs.txtUniversityAddress.value,
            Website:this.refs.txtWebSite.value
        }
        makeApiRequest('POST' , 'api/UniversityApi' , newUniversity ,(data)=>{
            alert('Üniversite Eklendi' )
        },(error)=>{
            alert('Hata Oluştu' + error)
        });
        // Fill User Information from api 
    }

    handleIdChange(event) {
        var UniversityId = event.target.value;
        this.setState(prevState => ({
            UniversityId: UniversityId ,
            UniversityName: prevState.UniversityName,
            Address:prevState.Address,
            Website:prevState.Website
        }));
        
    }

    handleWebSiteChange(event) {
        var WebSite = event.target.value;
        this.setState(prevState => ({
            UniversityId: prevState.UniversityId ,
            UniversityName: prevState.UniversityName,
            Address:prevState.Address,
            Website:WebSite
        }));
    }

    handleNameChange(event) {
        var UniversityName = event.target.value;
        this.setState(prevState => ({
            UniversityId: prevState.UniversityId ,
            UniversityName: UniversityName,
            Address:prevState.Address,
            Website:prevState.WebSite
        }));
        
    }

      handleAddressChange(event) {
        var UniversityAddress = event.target.value;
        this.setState(prevState => ({
            UniversityId: prevState.UniversityId ,
            UniversityName: prevState.UniversityName,
            Address:UniversityAddress,
            Website:prevState.WebSite
        }));
       
    }
    render() {
       var resizenone={
           resize : 'none'
       }
       return (
           <div>
                 <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

               <h2>Üniversite Tanımlama</h2>
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container w3-quarter">
                            <input className="w3-input w3-border w3-padding" ref="txtUniversityCode" type="text" onChange={this.handleIdChange.bind(this)}  placeholder="Üniversite Kodu" id="txtUniCode"/>
                        </div>
                        <div className="w3-container w3-threequarter">
                            <input className="w3-input w3-border w3-padding" ref="txtWebSite" type="text" onChange={this.handleWebSiteChange.bind(this)} placeholder="Web Sitesi" id="txtWebSite"/>
                        </div>
                    </div>
                     <div className="w3-quarter"></div>	
                
                </div>
                
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container">
                            <input className="w3-input w3-border w3-padding" type="text"  ref="txtUniversityName" onChange={this.handleNameChange.bind(this)}  placeholder="Üniversite Adı" id="txtUniName"/>
                        </div>
                    </div>
                </div>
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container">
                            <textarea className="w3-input w3-border w3-padding" ref="txtUniversityAddress" onChange={this.handleAddressChange.bind(this)} style={resizenone} placeholder="Üniversite Adres"></textarea>
                        </div>
                    </div>
                </div>
                <div className="w3-row ">
                    <div className="w3-threequarter">
                        <div className="w3-container w3-right">
                            <button className="w3-btn w3-ripple w3-green">Üniversiteyi Ekle</button>
                        </div>
                    </div>
                </div>
                </form>
                    <br></br>
                <input className="w3-input w3-border w3-padding" type="text" placeholder="Üniversite Ara.." id="myInput" onkeyup="myFunction()"/>
                <table className="w3-table-all w3-hoverable" id="myTable">
                    <thead>
                    <tr className="w3-light-grey">
                        <th>Üniversite Kodu</th>
                        <th>Üniversite Adı</th>
                        <th>Web Sitesi</th>
                        <th>Adres</th>
                        <th>Düzenle</th>
                    </tr>
                    </thead>
                    <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                    <td>50</td>
                    <td>Düzenle</td>
                    </tr>
                    <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                    <td>50</td>
                    <td>Düzenle</td>
                    </tr>
                    <tr>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>67</td>
                    <td>50</td>
                    <td>Düzenle</td>
                    </tr>
             </table>
           </div>
       );
    }
}

export default CreateUniversity;

