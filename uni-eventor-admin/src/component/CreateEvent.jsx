
import React, { Component } from 'react';
import '../css/w3.css';
import Map from '../component/Map.jsx';

class CreateEvent extends Component {
    render() {
        var displaynone = {
            display: 'none'
        };
        var resizenone = {
            resize:'none'
        };
        var width100={
            width:'100%'
        };
        
        return (
            <div>
               
                     <h2>Etkinlik Tanımlama</h2>
                    <div className="w3-threequarter">
                            <div className="w3-row w3-section">
                                
                                <div className="w3-container">
                                    <input className="w3-input w3-border w3-padding" type="text" placeholder="Etkinlik Adı" id="txtEventName"/>
                                </div>
                                        
                            </div>
                            <div className="w3-row w3-section">
                                
                                    <div className="w3-container w3-half">
                                        
                                            <label><i className="fa fa-calendar-o"></i> Etkinlik Başlangıç</label>
                                            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckIn" required=""/>
                                        
                                    </div>
                                    <div className="w3-container w3-half">
                                        
                                            <label><i className="fa fa-calendar-o"></i> Etkinlik Bitiş</label>
                                            <input className="w3-input w3-border" type="text" placeholder="DD MM YYYY" name="CheckIn" required=""/>
                                        
                                    </div>
                                
                                
                            
                            </div>
                            
                            <div className="w3-row w3-section">
                                
                                    <div className="w3-container w3-half">
                                        <label><i className="fa fa-child"></i>Kişi</label>
                                    <input className="w3-input w3-border" type="number" value="0" name="Kids" min="0" max="6"/>
                                    
                                    </div>
                                    <div className="w3-container w3-half">
                                        <label><i className="fa fa-star"></i>Etkinlik Tipi</label>
                                        <select className="w3-select w3-border w3-padding" name="option">
                                            <option value="" disabled selected>Etkinlik Tipi Seç</option>
                                            <option value="SAU54">Seminer</option>
                                            <option value="KOU41">Konferans</option>
                                            <option value="KOU41">Söyleşi</option>
                                        </select>
                                    </div>
                                
                            </div>
                            <div className="w3-row w3-section">
                                    <div className="w3-container ">
                                        <select className="w3-select w3-border w3-padding" name="option">
                                            <option value="" disabled selected>Etkinlik Alanı Seç</option>
                                            <option value="SAU54">C++</option>
                                            <option value="KOU41">C#</option>
                                            <option value="KOU41">Bilişim</option>
                                        </select>
                                    </div>
                                
                            </div>
                            <div className="w3-row w3-section">
                            
                                    <div className="w3-container">
                                        <textarea className="w3-input w3-border w3-padding" style={resizenone} placeholder="Etkinlik İçeriği" rows="5"></textarea>
                                    </div>
                                
                            </div>
                            <div className="w3-row w3-section">
                                    <div className="w3-container">
                                      <input type="file" id="file"  />
                            
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
        </div>
        	
        );
    }
}

export default CreateEvent;
