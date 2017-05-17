
import React, { Component } from 'react';
import '../css/w3.css';


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
    }
    submitHandler(e) {
        e.preventDefault();
        alert('Topluluk Ekleme');
        // Fill User Information from api 
    }

     handleCommunityNameChange(event) {
        var CommunityName = event.target.value;
        var currentTime = new  Date().toLocaleString();
        this.setState(prevState => ({
            CommunityId: prevState.CommunityId,
            CommunityName: CommunityName , 
            DateCreated: currentTime,
            LastUpdated:currentTime , 
            FkCreatorId : 'testuser', 
            FkResponsibleId : 'testuser'
        }));
        
    }

     handleFkResponsibleIdChange(event) {
        var FkResponsibleId = event.target.value;
        var currentTime = new  Date().toLocaleString();
        this.setState(prevState => ({
            CommunityId: prevState.CommunityId,
            CommunityName: prevState.CommunityName , 
            DateCreated: currentTime,
            LastUpdated:currentTime , 
            FkCreatorId : 'testuser', 
            FkResponsibleId : FkResponsibleId
        }));
        
    }
    render() {
        
        return (
            <div>
            <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

                <h2>Topluluk Tanimlama</h2>
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Topluluk Adi"  onChange={this.handleCommunityNameChange.bind(this)} id="txtCommunityName" />
                        </div>
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Topluluk Baskani Kullanici Adi" onChange={this.handleFkResponsibleIdChange.bind(this)}  id="txtUniName" />
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
