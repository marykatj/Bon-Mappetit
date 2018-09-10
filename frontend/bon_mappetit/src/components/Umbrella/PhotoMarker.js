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

const pictureStyle = {
  position: "absolute",
  width: "90px",
  transform: "translate(-50%, -100%)",
  borderRadius: '8px'
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
                  <img src={tempImage} style={pictureStyle} alt="" onClick={this.state.clicked === true ? this.unClick : this.markerClick}/>
                  {this.state.clicked === true ? (<p style={tileStyle}> {this.props.place.address} </p>) : null }
              </div>
    )}
  }

  // <React.Fragment >
  //     <img className='currentIcon' src={pin} alt='' style={markerStyle} />
  //       <div>
  //         <img src={tempImage} style={pictureStyle} alt="" onClick={this.state.clicked === true ? this.unClick : this.markerClick}/>
  //         {this.state.clicked === true ? (<p style={tileStyle}> {this.props.place.address} </p>) : null }
  //         </div>
  // </React.Fragment>

/////////////////////////////////////////////////////////////////////////////


export default PhotoMarker;
