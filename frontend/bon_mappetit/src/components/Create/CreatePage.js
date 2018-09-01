import React, { Component } from 'react';
import CreateMap from './CreateMap';
import FormContainer from './FormContainer'

class CreatePage extends Component {

  render() {
      return (
          <div>
          <h2 id='exploreHeader'> share. </h2>
            <FormContainer />
            <CreateMap />
          </div>
      );
    }

}

export default CreatePage;
