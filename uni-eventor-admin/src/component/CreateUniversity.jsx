import React, { Component } from 'react';
import '../css/w3.css';

class CreateUniversity extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('Register');
        // Fill User Information from api 
    }

    render() {
       var resizenone={
           resize : 'none'
       }
       return (
           <div>
               <h2>Üniversite Tanımlama</h2>
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container w3-quarter">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Üniversite Kodu" id="txtUniName"/>
                        </div>
                        <div className="w3-container w3-threequarter">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Web Sitesi" id="txtUniName"/>
                        </div>
                    </div>
                     <div className="w3-quarter"></div>	
                
                </div>
                
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Üniversite Adı" id="txtUniName"/>
                        </div>
                    </div>
                </div>
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container">
                            <textarea className="w3-input w3-border w3-padding" style={resizenone} placeholder="Üniversite Adres"></textarea>
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

