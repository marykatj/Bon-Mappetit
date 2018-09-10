import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import pin from '../../images/logo.png'
import tempImage from '../../images/Coffee.jpg'

/////////////////////////////////////////////////////////////////////////////////

const markerStyle = {
  position: "absolute",
  width: "15px",
  height: "15px",
  transform: "translate(-50%, -100%)",
}

////////////////////////////////////////////////////////////////////////////////

class MapsMarker extends Component {

  render() {
    return (
      <div>
          <img className='currentIcon' src={pin} alt='' style={markerStyle} />
      </div>
    )}
  }


/////////////////////////////////////////////////////////////////////////////


export default MapsMarker;
