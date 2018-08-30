import React, { Component } from 'react';
import ExploreMap from './ExploreMap';
import ExploreSearch from './ExploreSearch';

class ExplorePage extends Component {

  render() {
    return (
        <div id='exploreContainer'>
          <h1 id='exploreHeader'> discover. </h1>
          <ExploreMap />
          <ExploreSearch />
        </div>
    );
  }

}

export default ExplorePage;
