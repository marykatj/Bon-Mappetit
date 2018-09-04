import React, { Component } from 'react'
import pin from '../../images/logo.png'

const markerStyle = {
  position: "absolute",
  width: "15px",
  height: "15px",
  transform: "translate(-50%, -100%)"
}

class MapsMarker extends Component {

  markerClick = () => {
    console.log("clicked")
  }

  render() {
    return (
      <div>
        <img className='currentIcon' src={pin} alt='' onClick={this.markerClick} style={markerStyle}/>
      </div>
    )
  }

}

export default MapsMarker;
