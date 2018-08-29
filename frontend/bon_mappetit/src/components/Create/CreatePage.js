import React, { Component } from 'react';
import CreateForm from './CreateForm';
import CreateMap from './CreateMap';
import CreateSearch from './CreateSearch';

class CreatePage extends Component {

  render() {
    return (
        <div>
          <CreateSearch />
          <CreateForm />
          <CreateMap />
        </div>
    );
  }

}

export default CreatePage;
