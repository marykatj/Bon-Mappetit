import React, { Component } from 'react'
import CreateForm from './CreateForm'

class FormContainer extends Component {


  render() {
    return (
      <div id='createPostsContainer'>
        <CreateForm history={this.props.history} />   
      </div>
    )
  }
}

export default FormContainer;
