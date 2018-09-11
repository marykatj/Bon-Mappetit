import React, { Component } from 'react';
import CreateMap from './CreateMap';
import FormContainer from './FormContainer'
import LocationSearchInput from '../Umbrella/LocationSearchInput';

class CreatePage extends Component {

  render() {
      return (
          <div>
          <h1 id='exploreHeader'> share. </h1>
            <LocationSearchInput />
            <FormContainer />
            <CreateMap />
          </div>
      );
    }

}

export default CreatePage;
