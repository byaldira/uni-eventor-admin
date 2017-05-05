import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import * as AuthModule from './App.Auth';
import './css/w3.css';
import './css/admin.css';
import './css/font-awesome.min.css'
class App extends Component {
    
    render() {
        
        return (
            <div className="App">
                    <div className="w3-bar w3-top w3-black w3-large zindex4" >
                    <button className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey" onclick="w3_open();"><i className="fa fa-bars"></i> &nbsp;Menu</button>
                        <IndexLink  className="w3-bar-item w3-right w3-bar-item w3-button w3-hover-teal" to="/">UniEventor</IndexLink>
                   </div>
                    <nav className="w3-sidebar w3-collapse w3-white w3-animate-left zindex4w300"  id="mySidebar"><br></br>
                        <div className="w3-container w3-row">
                            <div className="w3-col s4">
                            <img src="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-plaid-shirt-guy.png" className="w3-circle w3-margin-right w46" />
                            </div>
                            <div className="w3-col s8 w3-bar">
                            <span>Merhaba, <strong>Burak</strong></span><br></br>
                            <Link to="/" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></Link>
                            <Link to="/" className="w3-bar-item w3-button"><i className="fa fa-user"></i></Link>
                            <Link to="/settings" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></Link>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="w3-container">
                            <h5>Admin Panel</h5>
                        </div>
                        <div className="w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onclick="w3_close()" title="close menu"><i className="fa fa-remove fa-fw"></i>&nbsp; Menuyu Kapat</a>
                            <Link activeClassName="w3-blue" className="w3-bar-item w3-button w3-padding w3-white" to="/university"><i className="fa fa-users fa-fw">&nbsp;Üniversite</i></Link>
                            <Link activeClassName="w3-blue" className="w3-bar-item w3-button w3-padding w3-white" to="/community"><i className="fa fa-eye fa-fw"></i>&nbsp; Topluluk</Link>
                            <Link activeClassName="w3-blue" className="w3-bar-item w3-button w3-padding w3-white" to="/event"><i className="fa fa-users fa-fw"></i>&nbsp; Etkinlik</Link>
                            <Link activeClassName="w3-blue" className="w3-bar-item w3-button w3-padding w3-white" to="/role"><i className="fa fa-bullseye fa-fw"></i>&nbsp; Rol</Link>
                          
                        </div>
                        </nav>
                        <div className="w3-main adminLayout">
                         {this.props.children}
                        </div>
                        
            </div>
        );
    }
}

export default App;
