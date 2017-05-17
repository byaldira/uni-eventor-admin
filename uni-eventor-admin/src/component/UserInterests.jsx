import React, { Component } from 'react';
import '../css/w3.css';

class UserInterests extends Component {
    submitHandler(e) {
        e.preventDefault();
        alert('UserInterests');
        // Fill User Information from api 
    }

    render() {
     
       return (
           <div>
             <h2>Kullanıcı Alanları</h2>
             <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="İlgi Alanı" id="txtUniName"/>
                    </div>
                     <div className="w3-quarter"></div>	
                
                </div>
            
             <div className="w3-threequarter">
                 <ul className="w3-ul w3-hoverable">
                    <li>c#</li>
                    <li>IoT</li>
                    <li>javascript</li>
                 </ul>
             </div>
            
           </div>
       );
    }
}

export default UserInterests;
