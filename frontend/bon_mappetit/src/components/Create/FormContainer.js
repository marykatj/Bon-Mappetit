import React, { Component } from 'react'
import CreateForm from './CreateForm'

class FormContainer extends Component {


  render() {
    return (
      <div id='createPostsContainer'>
        <CreateForm />   
      </div>
    )
  }
}

export default FormContainer;
