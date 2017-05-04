import React, { Component } from 'react';
import '../css/w3.css';
import CreateCommunity from '../component/CreateCommunity.jsx';

class Community extends Component {
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
        var displaynone = {
            display: 'none'
        };
        return (
            <div>

                <div className="w3-row">
                    <span onClick={(e) => this.handleClick('Topluluk', this).bind(this)}>
                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Topluluk</div>
                    </span>
                    
                </div>
                <div id="Topluluk" className="w3-container city" >
                    <CreateCommunity />
                </div>
               

            </div>
        );
    }
}

export default Community;