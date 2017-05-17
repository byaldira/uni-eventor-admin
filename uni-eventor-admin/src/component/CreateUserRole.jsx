import React, { Component } from 'react';
import '../css/w3.css';

class CreateUserRole extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName : '' , 
            RoleName :'' 
        };
    }

    submitHandler(e) {
        e.preventDefault();
        alert('Kullanıcı Rolü Oluşturuldu.');
        // Fill User Information from api 
    }

    handleUserNameChange(event) {
        var UserName = event.target.value;
        this.setState(prevState => ({
            UserName: UserName  , 
            RoleName : prevState.RoleName

        }));
        alert(UserName);
     }

     handleRoleNameChange(event) {
        var RoleName = event.target.value;
        this.setState(prevState => ({
            UserName: prevState.UserName  , 
            RoleName : RoleName
        }));
        alert(RoleName);
     }

    render() {
       
       return (
           <div>
                <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

              <h2>Kullanici Rol</h2>
                    <div className="w3-row w3-section">
                        <div className="w3-threequarter">
                            <div className="w3-container w3-quarter">
                                <input className="w3-input w3-border w3-padding" type="text" placeholder="Kullanicı Adi" id="txtUserName" onChange={this.handleUserNameChange.bind(this)}/>
                            </div>
                            <div className="w3-container w3-threequarter">
                                <select className="w3-select w3-border w3-padding" name="option"  onChange={this.handleRoleNameChange.bind(this)} >
                                <option value="" disabled selected>Role Seç</option>
                                <option value="EVNT_SPR">EVNT_SPR</option>
                                <option value="EVNT_USR">EVNT_USR</option>
                                <option value="EVNT_CMYKL">EVNT_CMYKL</option>
                                <option value="EVNT_ACMYKL">EVNT_ACMYKL</option>
                                <option value="EVNT_UNYKL">EVNT_UNYKL</option>
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
                    </form>
           </div>
       );
    }
}

export default CreateUserRole;

