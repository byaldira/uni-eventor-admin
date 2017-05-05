import React, { Component } from 'react';

class Map extends Component {
    render() {
        var iframe = {
            __html: '<iframe src = "https://maps.google.com/maps?q=' 
                    + this.props.lang + ',' + this.props.long 
                    + '&hl=es;z=14&amp;output=embed" width="' 
                    + this.props.width + '" height="' 
                    + this.props.height + '" frameborder="0" style="border:0"></iframe></div>'
        };
        return (
            <div className={this.props.cssClass}>
                <div dangerouslySetInnerHTML={iframe}></div>
            </div>
        );
    }
}

export default Map;