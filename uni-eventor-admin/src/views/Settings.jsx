import React, { Component } from 'react';
import '../css/w3.css';
import UserInformation from '../component/UserInformation.jsx'
import UserInterests from '../component/UserInterests.jsx'
import JoinedEvents from '../component/JoinedEvents.jsx'
class Settings extends Component {
    handleClick = (e, cityName) => {
        // e burada click icin bildigimiz event nesnesi
        var i, x, tablinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
        }
        document.getElementById(e).style.display = "block";
        e.currentTarget.firstElementChild.className += " w3-border-red";

    }
    render() {
       var displaynone ={
           display : 'none'
       }
        return (
             <div>
                 <div className="w3-row">
                    <span onClick={(e) => this.handleClick('KullaniciBilgilerim', this).bind(this)}>
                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Kullanici Bilgilerim</div>
                    </span>
                     <span onClick={(e) => this.handleClick('IlgiAlanlarim', this).bind(this)}>
                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Ilgi Alanlarim</div>
                    </span>
                     <span onClick={(e) => this.handleClick('JoinedEvents', this).bind(this)}>
                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Katildigim Etkinlikler</div>
                    </span>
                     
                    
                </div>
              <div id="KullaniciBilgilerim" className="w3-container city" >
                    <UserInformation />
              </div>
             <div id="IlgiAlanlarim" className="w3-container city" style={displaynone} >
                    <UserInterests />
              </div>
              <div id="JoinedEvents" className="w3-container city" style={displaynone} >
                    <JoinedEvents />
              </div>
              
            </div>
        );
    }
}

export default Settings;