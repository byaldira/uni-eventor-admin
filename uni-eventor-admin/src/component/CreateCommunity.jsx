
import React, { Component } from 'react';
import '../css/w3.css';


class CreateCommunity extends Component {
    render() {
        var displaynone = {
            display: 'none'
        };
        return (
            <div>

                <h2>Topluluk Tanimlama</h2>
                <div className="w3-row w3-section">
                    <div className="w3-threequarter">
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Topluluk Adi" id="txtCommunityName" />
                        </div>
                        <div className="w3-container w3-half">
                            <input className="w3-input w3-border w3-padding" type="text" placeholder="Topluluk Baskani Kullanici Adi" id="txtUniName" />
                        </div>
                    </div>
                    <div className="w3-quarter"></div>

                </div>

                <div className="w3-row ">
                    <div className="w3-threequarter">
                        <div clasclassNames="w3-container w3-right">
                            <button className="w3-btn w3-ripple w3-green">Topluluk Ekle</button>
                        </div>
                    </div>
                </div>

                <br></br>

            </div>

        );
    }
}

export default CreateCommunity;
