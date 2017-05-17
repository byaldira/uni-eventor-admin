
import React, { Component } from 'react';
import '../css/w3.css';
import * as AuthModule from '../App.Auth';
import { makeApiRequest } from '../App.Request';



class CreateCommunity extends Component {
      constructor(props) {
        super(props);
        this.state = {
            CommunityId: '',
            CommunityName: '',
            DateCreated: '',
            LastUpdated:'' , 
            FkCreatorId : '', 
            FkResponsibleId : ''
        };
          AuthModule.login('testuser', 'Cem.123', () => {
             }, (error) => {
                alert('failed');
            });
    }
    submitHandler(e) {
        e.preventDefault();
       
        alert(this.refs.txtCommunityName.value);
        alert(this.refs.txtResponsibleUser.value);
         var currentTime = new  Date().toLocaleString();
        var newCommunity = {
            CommunityId: '',
            CommunityName: this.refs.txtCommunityName.value,
            DateCreated: currentTime,
            LastUpdated: currentTime , 
            FkCreatorId : 'testuser', 
            FkResponsibleId : this.refs.txtResponsibleUser.value
        }
        makeApiRequest('POST' , 'api/CommunityApi' ,newCommunity ,(data)=>{
            alert('Topluluk Eklendi' )
        },(error)=>{
            alert('Hata Oluştu' + error)
        });
    }

    render() {
        
        return (
            <div>
            <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

                <h2>Topluluk Tanimlama</h2>
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" ref="txtCommunityName" placeholder="Topluluk Adi"  id="txtCommunityName" />
                        </div>
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" ref="txtResponsibleUser" placeholder="Topluluk Baskani Kullanici Adi"  id="txtUniName" />
                        </div>
                    </div>
                    <div className="w3-quarter"></div>

                </div>

                <div className="w3-row ">
                    <div className="w3-threequarter">
                        <div classNames="w3-container w3-right">
                            <button className="w3-btn w3-ripple w3-green">Topluluk Ekle</button>
                        </div>
                    </div>
                </div>

                <br></br>
            </form>
            </div>

        );
    }
}

export default CreateCommunity;
