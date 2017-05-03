import React, { Component } from 'react';
import '../css/w3.css';
import ProfilePhoto from '../component/ProfilePhoto.jsx';
import DropDownMenu from '../component/DropDownMenu.jsx';
import Interests from '../component/Interests.jsx';
import EventCardSmall from '../component/EventCardSmall.jsx';
import EventCardLarge from '../component/EventCardLarge.jsx';
import CardSection from '../component/CardSection.jsx';

class Profile extends Component {
    render() {
        var pageStyle = {
            paddingTop: '50px'
        };
        var interests = [
            {
                id: 'id1',
                text: 'interest1'
            },
            {
                id: 'id2',
                text: 'interest2'
            },
            {
                id: 'id3',
                text: 'interest3'
            },
            {
                id: 'id4',
                text: 'interest4'
            },
        ];
        return (
            <div className="w3-row" style={pageStyle}>
                <div className="w3-col m2">
                    <ProfilePhoto image="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png" imgAlt={this.props.params.userId} fullname={this.props.params.userId} />
                    <div className="w3-padding">
                        <CardSection cardClass="w3-card-4 w3-round">
                            <DropDownMenu menuName="Menu">
                                <p>Menu Item 1</p>
                                <p>Menu Item 1</p>
                            </DropDownMenu>
                            <DropDownMenu menuName="Menu2">
                                <p>Menu Item 1</p>
                                <p>Menu Item 1</p>
                                <p>Menu Item 1</p>
                                <p>Menu Item 1</p>
                            </DropDownMenu>
                            <DropDownMenu menuName="Menu3">
                                <p>Menu Item 1</p>
                                <p>Menu Item 1</p>
                                <p>Menu Item 1</p>
                                <p>Menu Item 1</p>
                            </DropDownMenu>
                        </CardSection>
                        <CardSection cardClass="w3-card-4 w3-round">
                            <Interests data={interests} />
                        </CardSection>
                    </div>
                </div>
                <div className="w3-col m8 w3-padding">
                    <div className="w3-row">
                        <div className="w3-row w3-container">
                            <h2>İlginizi Çekebilecek Etkinliker</h2>
                        </div>
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 1" id="s1" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 2" id="s2" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 3" id="s3" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 4" id="s4" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                    </div>
                    <br />
                    <br />
                    <div className="w3-row">
                        <div className="w3-row w3-container">
                            <h2>Katıldığınız Etkinlikler</h2>
                        </div>
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 1" id="s1" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 2" id="s2" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 3" id="s3" />
                        <EventCardSmall poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event S 4" id="s4" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                        <EventCardSmall poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                    </div>
                </div>
                <div className="w3-col m2">
                    <h4 className="w3-center">Yaklaşan Etkinlikler</h4>
                    <div className="w3-section">
                        <EventCardLarge poster="http://payload.cargocollective.com/1/4/146823/2056344/DrumbeatPosterRGB-01-01.jpg"
                            title="Event L 1" id="l1" />
                        <EventCardLarge poster="https://about.canva.com/wp-content/uploads/sites/3/2015/01/concert_poster.png"
                            title="Event L 1" id="l1" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Profile;