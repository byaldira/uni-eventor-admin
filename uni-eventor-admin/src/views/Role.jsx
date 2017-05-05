import React, { Component } from 'react';
import '../css/w3.css';
import CreateUserRole from '../component/CreateUserRole.jsx'

class Role extends Component {
    render() {
       
        return (
             <div>
                 <div className="w3-row">
                    <span onClick={(e) => this.handleClick('KullaniciRol', this).bind(this)}>
                        <div className="w3-third tablink w3-bottombar w3-hover-light-grey w3-padding">Kullanıcı Rol</div>
                    </span>
                     
                    
                </div>
              <div id="KullaniciRol" className="w3-container city" >
                    <CreateUserRole />
              </div>
             
            </div>
        );
    }
}

export default Role;