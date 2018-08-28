import React, { Component } from 'react';
import CreateForm from './CreateForm';
import CreateMap from './CreateMap';
import CreateSearch from './CreateSearch';

class CreatePage extends Component {

  render() {
    return (
        <div className='App-body'>
          <h1> create page! </h1>
          <CreateMap />
          <CreateForm />
          <CreateSearch />
        </div>
    );
  }

}

export default CreatePage;
