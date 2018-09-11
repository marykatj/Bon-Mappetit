/*global google*/
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

/////////////////////////////////////////////////////////////////////////////////

const pictureStyle = {
  position: "absolute",
  width: "90px",
  height: '60px',
  transform: "translate(-50%, -100%)",
  borderRadius: '8px',
  // size: new google.maps.Size(71, 71),
  //origin: new google.maps.Point(0, 0),
  //anchor: new google.maps.Point(17, 34),
  // scaledSize: new google.maps.Size(64, 64)

}

const tileStyle = {
  margin: '5px',
  border: '5px solid #ccc',
  width: '70px',
  height: '20px',
  background: '#D3D3D3',
  padding: '15px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

////////////////////////////////////////////////////////////////////////////////

class PhotoMarker extends Component {

  state = {
    clicked: false
  }

  markerClick = () => {
    this.setState({
      clicked: true
    })
  }

  unClick = () => {
    this.setState({
      clicked: false
    })
  }


////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
              <div>
                <img className='currentIcon' src={this.props.place.image_url} alt='' style={pictureStyle} onClick={this.state.clicked === true ? this.unClick : this.markerClick}/>
                {this.state.clicked === true ? (<p style={tileStyle}> {this.props.place.address} </p>) : null }
              </div>
    )}
  }


/////////////////////////////////////////////////////////////////////////////


export default PhotoMarker;
