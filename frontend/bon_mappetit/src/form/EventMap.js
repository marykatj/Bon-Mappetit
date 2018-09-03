import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

const Marker = () => <Icon name='marker' size='big' color='red'/>

class EventMap extends Component {

mapCenter = () => {
  let lat = this.props.coord.lat;
  let lng = this.props.coord.lng;
  return [lat, lng]
}

render() {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck' }}
            defaultCenter={this.mapCenter()}
            defaultZoom={14} >
            <Marker
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'} />
          </GoogleMapReact>
        </div>
    )
  }
}

//grab coordinates state from reducer & insert here as props, to pass to Event Map

function mapStateToProps(state) {
  return {
    coord: state.coord,
  }
}
/////////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps)(EventMap);

// <Marker
//   lat={props.coord.lat}
//   lng={props.coord.lng} />

//    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8eyGeIVO1m-lMAwJ21o3qiUPRiuFV_ck&libraries=places"></script>
