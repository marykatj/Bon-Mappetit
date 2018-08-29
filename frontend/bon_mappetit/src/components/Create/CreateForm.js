import React, { Component } from 'react';

class CreateForm extends Component {

  render() {
    return (
        <div className='Post-form'>
          <h2> Find a new spot? </h2>
          <form className="description" onSubmit={this.saveAction} >
            <input type="text" name="location" value={this.props.location} onChange={this.inputChange}/>
            <textarea name="description" value={this.props.description} onChange={this.inputChange}/>
            <div className="button-row">
            <button type="button" onClick={this.uploadPhoto}>Upload</button>
              <input className="button" type="submit" value="Share"/>
            </div>
          </form>
        </div>
    );
  }

  ////////////////////////////////////////////////////////////////////////////

  saveAction = () => {
    console.log("submit button")
  }

  inputChange = () => {
    console.log("input change")
  }

  uploadPhoto = () => {
    console.log("photo upload")
  }

}

export default CreateForm;
