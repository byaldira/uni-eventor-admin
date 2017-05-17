
import React, { Component } from 'react';
import '../css/w3.css';
import Map from '../component/Map.jsx';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EventName: '',
            EventStartDate: '',
            EventEndDate: '',
            MaxSeats:'' , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : '' , 
            Longitude : '' , 
            Address : '' , 
            Content : '' , 
            CommunityIds : ["1"] , 
            InterestIds : ["1"], 
            FileName : '' , 
            Base64Data : '' , 
            FkEventTypeId : '' , 

        };
    }

    handleEventNameChange(event) {
        var EventName = event.target.value;
        this.setState(prevState => ({
            EventName: EventName , 
            EventStartDate: prevState.EventStartDate,
            EventEndDate: prevState.EventEndDate,
            MaxSeats:prevState.MaxSeats , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : prevState.Latitude , 
            Longitude : prevState.Longitude, 
            Address : prevState.Address , 
            Content :prevState.Content , 
            CommunityIds : ["1"] , 
            InterestIds : ["1"], 
            FileName : prevState.FileName , 
            Base64Data : prevState.Base64Data , 
            FkEventTypeId : prevState.FkEventTypeId , 
        }));
     }

    
    
    
    
    
    
    handleEventStartDateChange(event) {
        var EventStartDate = event.target.value;
        this.setState(prevState => ({
            EventName: prevState.EventName , 
            EventStartDate: EventStartDate,
            EventEndDate: prevState.EventEndDate,
            MaxSeats:prevState.MaxSeats , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : prevState.Latitude , 
            Longitude : prevState.Longitude, 
            Address : prevState.Address , 
            Content :prevState.Content , 
            CommunityIds : ["1"] , 
            InterestIds : ["1"], 
            FileName : prevState.FileName , 
            Base64Data : prevState.Base64Data , 
            FkEventTypeId : prevState.FkEventTypeId , 
        }));
    }

    handleEventEndDateChange(event) {
        var EventEndDate = event.target.value;
        this.setState(prevState => ({
            EventName: prevState.EventName , 
            EventStartDate: prevState.EventStartDate,
            EventEndDate: EventEndDate,
            MaxSeats:prevState.MaxSeats , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : prevState.Latitude , 
            Longitude : prevState.Longitude, 
            Address : prevState.Address , 
            Content :prevState.Content , 
            CommunityIds : ["1"] , 
            InterestIds : ["1"], 
            FileName : prevState.FileName , 
            Base64Data : prevState.Base64Data , 
            FkEventTypeId : prevState.FkEventTypeId , 
        }));
    }
    handleMaxSeatsChange(event) {
        var MaxSeats = event.target.value;
        this.setState(prevState => ({
            EventName: prevState.EventName , 
            EventStartDate: prevState.EventStartDate,
            EventEndDate: prevState.EventEndDate,
            MaxSeats:MaxSeats , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : prevState.Latitude , 
            Longitude : prevState.Longitude, 
            Address : prevState.Address , 
            Content :prevState.Content , 
            CommunityIds : ["1"] , 
            InterestIds : ["1"], 
            FileName : prevState.FileName , 
            Base64Data : prevState.Base64Data , 
            FkEventTypeId : prevState.FkEventTypeId , 
        }));
    }
    handleFkEventTypeIdChange(event) {
        var FkEventTypeId = event.target.value;
        this.setState(prevState => ({
            EventName: prevState.EventName , 
            EventStartDate: prevState.EventStartDate,
            EventEndDate: prevState.EventEndDate,
            MaxSeats:prevState.MaxSeats , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : prevState.Latitude , 
            Longitude : prevState.Longitude, 
            Address : prevState.Address , 
            Content :prevState.Content , 
            CommunityIds : ["1"] , 
            InterestIds : ["1"], 
            FileName : prevState.FileName , 
            Base64Data : prevState.Base64Data , 
            FkEventTypeId : FkEventTypeId , 
        }));
       
    }
    handleInterestIdsChange(event) {
        var InterestIds = event.target.value;
        this.setState(prevState => ({
            EventName: prevState.EventName , 
            EventStartDate: prevState.EventStartDate,
            EventEndDate: prevState.EventEndDate,
            MaxSeats:prevState.MaxSeats , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : prevState.Latitude , 
            Longitude : prevState.Longitude, 
            Address : prevState.Address , 
            Content :prevState.Content , 
            CommunityIds : ["1"] , 
            InterestIds : [InterestIds], 
            FileName : prevState.FileName , 
            Base64Data : prevState.Base64Data , 
            FkEventTypeId : prevState.FkEventTypeId , 
        }));
      
    }
    handleContentChange(event) {
        var Content = event.target.value;
        this.setState(prevState => ({
            EventName: prevState.EventName , 
            EventStartDate: prevState.EventStartDate,
            EventEndDate: prevState.EventEndDate,
            MaxSeats:prevState.MaxSeats , 
            LocationName : 'Etkinlik Yeri' , 
            Latitude : prevState.Latitude , 
            Longitude : prevState.Longitude, 
            Address : prevState.Address , 
            Content :Content , 
            CommunityIds : ["1"] , 
            InterestIds : [prevState.InterestIds], 
            FileName : prevState.FileName , 
            Base64Data : prevState.Base64Data , 
            FkEventTypeId : prevState.FkEventTypeId , 
        }));
    }

    submitHandler(e) {
        e.preventDefault();

        alert('txtEventName:'+this.refs.txtEventName.value);
        alert('txtEventStartDate:'+this.refs.txtEventStartDate.value);
        alert('txtEventEndDate:'+this.refs.txtEventEndDate.value);
        alert('txtMaxSeats:'+this.refs.txtMaxSeats.value);
        alert('txtFkEventTypeId:'+this.refs.txtFkEventTypeId.value);
        alert('txtFkEventInterestId:'+this.refs.txtFkEventInterestId.value);
        alert('txtContent:'+this.refs.txtContent.value);
        alert('txtBase64bytes:'+this.refs.txtBase64bytes.value);
        var newEvent = {
            EventName: this.refs.txtEventName.value,
            EventStartDate: this.refs.txtEventStartDate.value,
            EventEndDate: this.refs.txtEventEndDate.value,
            MaxSeats:this.refs.txtMaxSeats.value,
            LocationName : 'Etkinlik Yeri' , 
            Latitude : '' , 
            Longitude : '' , 
            Address : '' , 
            Content : this.refs.txtContent.value,
            CommunityIds : ["1"] , 
            InterestIds : [this.refs.txtFkEventInterestId.value], 
            FileName : '' , 
            Base64Data : this.refs.txtBase64bytes.value,  
            FkEventTypeId : this.refs.txtFkEventTypeId.value,

        };
        alert('Etkinlik Oluşturuldu');
    }
    render() {
        
        var resizenone = {
            resize:'none'
        };
        var width100={
            width:'100%'
        };
        
        return (
            <div>
                <form className="w3-text-blue-gray" onSubmit={this.submitHandler.bind(this)}>

                     <h2>Etkinlik Tanımlama</h2>
                    <div className="w3-threequarter">
                            <div className="w3-row w3-section">
                                
                                <div className="w3-container">
                                    <input className="w3-input w3-border w3-padding" type="text"  placeholder="Etkinlik Adı" ref="txtEventName" onChange={this.handleEventNameChange.bind(this)} id="txtEventName"/>
                                </div>
                                        
                            </div>
                            <div className="w3-row w3-section">
                                
                                    <div className="w3-container w3-half">
                                        
                                            <label><i className="fa fa-calendar-o"></i> Etkinlik Başlangıç</label>
                                            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" ref="txtEventStartDate"  onChange={this.handleEventStartDateChange.bind(this)} name="CheckIn" required=""/>
                                        
                                    </div>
                                    <div className="w3-container w3-half">
                                        
                                            <label><i className="fa fa-calendar-o"></i> Etkinlik Bitiş</label>
                                            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" ref="txtEventEndDate" onChange={this.handleEventEndDateChange.bind(this)} name="CheckIn" required=""/>
                                        
                                    </div>
                                
                                
                            
                            </div>
                            
                            <div className="w3-row w3-section">
                                
                                    <div className="w3-container w3-half">
                                        <label><i className="fa fa-child"></i>Kişi</label>
                                    <input className="w3-input w3-border" type="number" value="0"  ref="txtMaxSeats" onChange={this.handleMaxSeatsChange.bind(this)} name="Kids"/>
                                    
                                    </div>
                                    <div className="w3-container w3-half">
                                        <label><i className="fa fa-star"></i>Etkinlik Tipi</label>
                                        <select className="w3-select w3-border w3-padding" name="option" ref="txtFkEventTypeId" onChange={this.handleFkEventTypeIdChange.bind(this)} >
                                            <option value="" disabled selected>Etkinlik Tipi Seç</option>
                                            <option value="1type">Seminer</option>
                                            <option value="2type">Konferans</option>
                                            <option value="3type">Söyleşi</option>
                                        </select>
                                    </div>
                                
                            </div>
                            <div className="w3-row w3-section">
                                    <div className="w3-container ">
                                        <select className="w3-select w3-border w3-padding" name="option" ref="txtFkEventInterestId" onChange={this.handleInterestIdsChange.bind(this)}>
                                            <option value="" disabled selected>Etkinlik Alanı Seç</option>
                                            <option value="SAU54">C++</option>
                                            <option value="KOU41">C#</option>
                                            <option value="KOU41">Bilişim</option>
                                        </select>
                                    </div>
                                
                            </div>
                            <div className="w3-row w3-section">
                            
                                    <div className="w3-container">
                                        <textarea className="w3-input w3-border w3-padding" style={resizenone} ref="txtContent" onChange={this.handleContentChange.bind(this)} placeholder="Etkinlik İçeriği" rows="5"></textarea>
                                    </div>
                                
                            </div>
                            <div className="w3-row w3-section">
                                    <div className="w3-container">
                                      <input type="file" id="file" ref="txtBase64bytes"  />
                            
                                     </div>
                            </div>
                            <div className="w3-row ">
                                
                                    <div className="w3-container w3-right">
                                        <button className="w3-btn w3-ripple w3-green">Etkinliği Ekle</button>
                                    </div>
                                
                            </div>
                    </div>
                    <div className="w3-quarter">
                        <div className="w3-card-4 test " style={width100}>
                            <img src="http://comp.eng.ankara.edu.tr/files/2014/03/intro.jpg" className="w3-hover-opacity" alt="Person" style={width100}/>
                            <div className="w3-container">
                            <h4><b>Etkinlik Resmi</b></h4>    
                            
                            </div>
                        </div>
                    </div>
                    <div className="w3-row">
                         <Map width="1100" height="300" lang="40.7413232" long="30.3296314" />
                    </div>
                    </form>
        </div>
        	
        );
    }
}

export default CreateEvent;
