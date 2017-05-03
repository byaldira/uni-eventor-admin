import React, { Component } from 'react';
import EventCardProfile from '../component/EventCardProfile.jsx';
import EventCoomingUp from '../component/EventCoomingUp.jsx';
import EventUsers from '../component/EventUsers.jsx';

import '../css/w3.css';
import '../css/w3-theme-black.css';

class EventPage extends Component {

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

        return (
            <div className="w3-row">
                <div className="w3-col m3">
                    <EventCardProfile poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                        title="Event S 1" id="s1" />
                    <div className="w3-card-2 w3-round">
                        Accordion
                    </div>
                    <div className="w3-card-2 w3-round w3-white w3-hide-small">
                        <div className="w3-container">
                            <div className="w3-row-padding">
                                <div className="w3-col s3">
                                    <p>Interests</p>
                                </div>

                            </div>
                            <p>

                                <span className="w3-tag w3-small w3-theme-d5">@interests.Title</span>

                                <span className="w3-tag w3-small @theme">@Model.Interests.ElementAt(i).Title</span>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="w3-col m7">
                    <div className="w3-row-padding">
                        <div className="w3-col m12">
                            <div className="w3-card-2 w3-round w3-white">
                                <div className="w3-container w3-padding">

                                    <h4 >Saü Bilişim Günleri</h4>
                                    <div className="w3-row">
                                        <span onClick={(e) => this.handleClick('Icerik', this).bind(this)}>
                                            <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">İçerik</div>
                                        </span>
                                        <span onClick={(e) => this.handleClick('Harita', this).bind(this)}>
                                            <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Harita</div>
                                        </span>
                                    </div>
                                    <div id="Icerik" ref="city" className="w3-container city">
                                        <h2>Icerik</h2>
                                        <p>Global markalar senin için kampüse geliyor ve markalaşmayı anlatıyor! Konu başlıklarımız neler?
                                                    ? Globalleşen dünyada değeri gitgide artan ?markalaşmayı? anlamak.
                                                    ? Markalaşan başarılı şirketlerin hikayelerini dinlemek, ilham almak.
                                                    ? Aktif olarak iş hayatında yıllarını harcamış başarılı yöneticilerin tecrübelerini, kariyerine henüz başlamakta olan gençlerle paylaşması.
                                                    ? Global markalaşma nedir, nasıl olur bunları global markalardan dinlemek.
                                                    ? Nasıl bir kariyer haritası izleyeceğini bilemeyen öğrencilere ilham vermek.
                                                    Katılımcı Markalar, Koç Bilişim Mercedes Metro UPS</p>
                                    </div>
                                    <div id="Harita" ref="city" className="w3-container city" >
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-col m2">
                    <EventCoomingUp poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                        title="Event S 1" id="s2" />
                    <br></br>
                    <EventUsers />
                </div>
            </div>
        );
    }
}

export default EventPage;