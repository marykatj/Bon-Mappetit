import React, { Component } from 'react'
import { connect } from 'react-redux';
import pin from '../../images/logo.png'
//import tempImage from '../../images/Coffee.jpg'

/////////////////////////////////////////////////////////////////////////////////

const markerStyle = {
  position: "absolute",
  width: "15px",
  height: "15px",
  transform: "translate(-50%, -100%)"
}

const pictureStyle = {
  position: "absolute",
  width: "90px",
  transform: "translate(-50%, -100%)",
  borderRadius: '8px',
  // maxWidth: '100%',
  // height: 'auto',
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

//Need to style the tile.  also insert 'hover' attributes

// .pigTile:hover {
//   transform: scale(1.05);
// }

////////////////////////////////////////////////////////////////////////////////

class MapsMarker extends Component {

  state = {
    currentIcon: {},    //do i even need this?
    name: '',
    clicked: false,
  }

  markerClick = () => {
    console.log(this.props.address)
    this.setState({
      currentIcon: this.props.place,
      clicked: true,
      name: this.props.address
    })
  }

  unClick = () => {
    this.setState({
      clicked: false,
      name: ''
    })
  }

////////////////////////////////////////////////////////////////////////////////

  render() {
    console.log(this.props.photo)    ////UNDEFINED.
    return (
      <div>
        <img className='currentIcon' src={pin} alt='' style={markerStyle}/>
        <div>
          <img src={this.props.photo} style={pictureStyle} alt="" onClick={this.state.clicked === true ? this.unClick : this.markerClick}/>
          {this.state.clicked === true ? (<p style={tileStyle}> {this.state.name} </p>) : null }
        </div>
      </div>
    )
  }

}
/////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    address: state.address,
    allUserLocations: state.allUserLocations,
    userSearch: state.userSearch
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps)(MapsMarker);
