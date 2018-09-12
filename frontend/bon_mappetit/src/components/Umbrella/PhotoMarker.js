/*global google*/
import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

/////////////////////////////////////////////////////////////////////////////////

const pictureStyle = {
  position: "absolute",
  width: "90px",
  height: '60px',
  // minWidth: '15px',
  // minHeight: '5px',
  // maxWidth: '300px',
  // maxHeight: '200px',
  transform: "translate(-50%, -100%)",
  borderRadius: '8px',
}

const tileStyle = {
  border: '5px solid #ccc',
  width: '70px',
  height: '20px',
  background: '#D3D3D3',
  padding: '10px 5px 20px 5px',
  //fontFamily: 'Fantasy',
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
                {this.state.clicked === true ? (<h5 style={tileStyle}> {this.props.place.address} </h5>) : null }
              </div>
    )}
  }


/////////////////////////////////////////////////////////////////////////////


export default PhotoMarker;
