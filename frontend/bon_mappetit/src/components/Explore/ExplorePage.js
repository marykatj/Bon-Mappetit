import React, { Component } from 'react';
import ExploreMap from './ExploreMap';
import ExploreForm from './ExploreForm';

class ExplorePage extends Component {


  render() {
    return (
      <div className="container">
        <h1 id='exploreHeader'> discover. </h1>
        <ExploreForm setLocation={this.setLocation}/>
        <ExploreMap />
      </div>
    );
  }

}

export default ExplorePage;

 //<ExploreMap />
