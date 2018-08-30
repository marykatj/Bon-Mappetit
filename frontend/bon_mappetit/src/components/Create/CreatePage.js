import React, { Component } from 'react';
import CreateForm from './CreateForm';
import CreateMap from './CreateMap';
import CreateSearch from './CreateSearch';
import FormContainer from './FormContainer'

class CreatePage extends Component {

  render() {
      return (
          <div>
          <h2 id='exploreHeader'> share. </h2>
            <CreateSearch />
            <FormContainer />
            <CreateMap />
          </div>
      );
    }

}

export default CreatePage;
