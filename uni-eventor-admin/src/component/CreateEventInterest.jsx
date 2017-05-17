import React, { Component } from 'react';
import '../css/w3.css';

class CreateEventInterest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InterestName : ''
        };
    }

    submitHandler(e) {
        e.preventDefault();
        alert('Etkinlik Alanı Oluşturuldu.');
        // Fill User Information from api 
    }

    handleInterestNameChange(event) {
        var InterestName = event.target.value;
        this.setState(prevState => ({
            InterestName: InterestName 
        }));
        alert(InterestName);
     }

    render() {
       
       return (
           <div>
                <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

               <h2>Etkinlik Alanı Tanımlama</h2>
                   <div className="w3-row w3-section">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Etkinlik Alanı Adı" onChange={this.handleInterestNameChange.bind(this)} id="txtEventInterestName"/>
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

