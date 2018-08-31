import React, { Component } from 'react';
import ExploreMap from './ExploreMap';
import ExploreSearch from './ExploreSearch';

class ExplorePage extends Component {


  render() {
    return (
      <div className="container">
        <h1 id='exploreHeader'> discover. </h1>
        <ExploreSearch />
        <ExploreMap />
      </div>
    );
  }

}

export default ExplorePage;
