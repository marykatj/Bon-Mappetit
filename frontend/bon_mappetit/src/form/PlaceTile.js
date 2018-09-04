import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlaceTile extends Component {

  render() {
    return (
      <div>
        <p>Hello</p>          //here we want to post details associated here.

      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    address: state.address,
    allUserLocations: state.allUserLocations,
    userSearch: state.userSearch
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps)(PlaceTile);
