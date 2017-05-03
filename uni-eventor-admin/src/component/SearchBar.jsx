import React, { Component } from 'react';
import '../css/font-awesome.min.css'
import '../css/searchbar.css';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" className="w3-input textbox-wrapper" placeholder="Search" />
            </div >
        );
    }
}

export default SearchBar;