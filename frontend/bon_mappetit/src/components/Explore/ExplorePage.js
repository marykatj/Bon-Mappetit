import React, { Component } from 'react';
import ExploreMap from './ExploreMap';
import ExploreSearch from './ExploreSearch';

class ExplorePage extends Component {

  render() {
    return (
        <div>
          <h1> explore page! </h1>
          <ExploreMap />
          <ExploreSearch />
        </div>
    );
  }

}

export default ExplorePage;
