import React, { Component } from 'react';
import CreateMap from './CreateMap';
import FormContainer from './FormContainer'
import LocationSearchInput from '../Umbrella/LocationSearchInput';

class CreatePage extends Component {

  render() {
      return (
          <div>
          <h2 id='exploreHeader'> share. </h2>
            <LocationSearchInput />
            <FormContainer />
            <CreateMap />
          </div>
      );
    }

}

export default CreatePage;
