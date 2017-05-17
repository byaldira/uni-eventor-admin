import React, { Component } from 'react';
import '../css/w3.css';
import * as AuthModule from '../App.Auth';
import { makeApiRequest } from '../App.Request';
class CreateEventType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EventTypeName : ''
        };
    }

    handleEventTypeNameChange(event) {
        var EventTypeName = event.target.value;
        this.setState(prevState => ({
            EventTypeName: EventTypeName 
        }));
        
     }
    submitHandler(e) {
        e.preventDefault();
        // alert(this.refs.txtEventTypeName.value);
        var newEventType= {
                EventTypeName : this.refs.txtEventTypeName.value
        }
         makeApiRequest('POST' , 'api/EventTypeApi' , newEventType ,(data)=>{
            alert('Etkinlik Tipi Eklendi' );
        },(error)=>{
            alert('Hata Oluştu' + error);
        });
        // Fill User Information from api 
    }

    render() {
       
       return (
           <div>
                <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

               <h2>Etkinlik Tipi</h2>
                    <div className="w3-row w3-section">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" ref="txtEventTypeName" onChange={this.handleEventTypeNameChange.bind(this)} placeholder="Etkinlik Tipi" id="txtEventTypeName"/>
                        </div>
                    </div>
                    <div className="w3-row ">
                        <div className="w3-half">
                            <div className="w3-container w3-right">
                                <button className="w3-btn w3-ripple w3-green">Etkinlik Tipi Ekle</button>
                            </div>
                        </div>
                    </div>
                    </form>
           </div>
       );
    }
}

export default CreateEventType;

