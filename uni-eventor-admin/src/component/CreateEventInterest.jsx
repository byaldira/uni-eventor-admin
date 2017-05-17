import React, { Component } from 'react';
import '../css/w3.css';
import * as AuthModule from '../App.Auth';
import { makeApiRequest } from '../App.Request';

class CreateEventInterest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InterestName : ''
        };
    }

    submitHandler(e) {
        // alert(this.refs.txtInterestName.value);
        e.preventDefault();
        var newEventInterest = {
            InterestName : this.refs.txtInterestName.value
        }
         makeApiRequest('POST' , 'api/DepartmentApi' , newEventInterest ,(data)=>{
            alert('Etkinlik İlgisi Eklendi' );
        },(error)=>{
            alert('Hata Oluştu' + error);
        });
      
        // Fill User Information from api 
    }

    handleInterestNameChange(event) {
        var InterestName = event.target.value;
        this.setState(prevState => ({
            InterestName: InterestName 
        }));
        // alert(InterestName);
     }

     

    render() {
       
       return (
           <div>
                <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

               <h2>Etkinlik Alanı Tanımlama</h2>
                   <div className="w3-row w3-section">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Etkinlik Alanı Adı" ref="txtInterestName" onChange={this.handleInterestNameChange.bind(this)} id="txtEventInterestName"/>
                        </div>
                    </div>
                    
                    <div className="w3-row ">
                        <div className="w3-half">
                            <div className="w3-container w3-right">
                                <button className="w3-btn w3-ripple w3-green">Etkinlik Alanı Ekle</button>
                            </div>
                        </div>
                    </div>
                     </form>
           </div>
       );
    }
}

export default CreateEventInterest;

