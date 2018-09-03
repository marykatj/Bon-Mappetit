import React, { Component } from 'react';
import LocationSearchInput from '../Umbrella/LocationSearchInput'
import ExploreMap from './ExploreMap'

class ExplorePage extends Component {

  render() {
    return (
      <div>
        <h1 id='exploreHeader'> discover. </h1>
        <LocationSearchInput />
        <ExploreMap />
      </div>
    );
  }

}

export default ExplorePage;
