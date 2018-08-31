import React, { Component } from 'react';
import ExploreMap from './ExploreMap';
import ExploreForm from './ExploreForm';

class ExplorePage extends Component {


  render() {

    return (
      <div className="container">
        <h1 id='exploreHeader'> discover. </h1>
        <ExploreForm setReportLocation={this.setReportLocation} />
        <ExploreMap />
      </div>
    );
  }

}

export default ExplorePage;
