import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

const Marker = () => <Icon name='marker' size='big' color='red'/>

class NewMap extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    }
  };

  render() {
    return (
      <div style={{ height: '100vh', width: '100%', float: 'left'}} id='map'>
        <GoogleMapReact id='map-container'
          bootstrapURLKeys={{ key: 'AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck' }}
          center={[this.props.coord.lat, this.props.coord.lng]}
          defaultZoom={14} >
          <Marker
            lat={this.props.coord.lat}
            lng={this.props.coord.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

///////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    coord: state.coord,
  }
}

export default connect(mapStateToProps)(NewMap);
