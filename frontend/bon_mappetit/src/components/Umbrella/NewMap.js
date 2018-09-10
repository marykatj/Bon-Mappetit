import React, { Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import MapsMarker from './MapsMarker'
import tempImage from '../../images/Coffee.jpg'
import uuid  from 'uuid'
import pin from '../../images/logo.png'

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

class NewMap extends Component {

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

    //////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div style={{ height: '100vh', width: '100%', float: 'left'}} id='map'>
        <GoogleMapReact id='map-container'
          bootstrapURLKeys={{ key: 'AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck' }}
          center={[this.props.coord.lat, this.props.coord.lng]}
          defaultZoom={14} >
          {this.createAllMarkers()}
        </GoogleMapReact>
      </div>
    );
  }


///////////////////////////////////////////////////////////////////////////////

  createAllMarkers = () => {
    if (this.props.currentPage === 'profile') {
      return this.props.allPlaces.map( place =>
        <React.Fragment>
          <MapsMarker src={pin} style={markerStyle} key={uuid()} place={place} lat={place.lat} lng={place.lng}/>
          <img lat={place.lat} lng={place.lng} src={place.image_url} style={pictureStyle} alt="" onClick={this.state.clicked === true ? this.unClick : this.markerClick}/>
          {this.state.clicked === true ? (<p style={tileStyle}> {place.address} </p>) : null }
        </React.Fragment> )
    } else {
        return this.props.allPlaces.map( place => <MapsMarker src={pin} style={markerStyle} key={uuid()} place={place} lat={place.lat} lng={place.lng}/> )
      }
  }

  // imageRender = () => {
  //   console.log("profile")
  //   return(
  //           <div>
  //             <img src={tempImage} style={pictureStyle} alt="" onClick={this.state.clicked === true ? this.unClick : this.markerClick}/>
  //             {this.state.clicked === true ? (<p style={tileStyle}> {this.props.place.address} </p>) : null }
  //           </div>
  //   )}

}

//this.props.place.image_url
///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
    allUserLocations: state.allUserLocations,
    allPlaces: state.allPlaces,
    currentPage: state.currentPage,
  }
}

export default connect(mapStateToProps)(NewMap);
