import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPostAction } from '../../action';
import { NavLink } from 'react-router-dom';
import ExplorePage from '../Explore/ExplorePage';

class CreateForm extends Component {

  state = {
    place: '',
    description: ''     // include photo: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" id="place" value={this.state.place} onChange={this.inputChange}/>
          <textarea id="description" value={this.state.description} onChange={this.inputChange}/>
          <div className="button-row">
                <button className="button" type="button" onClick={this.uploadPhoto}> upload </button>
                <NavLink onClick={this.handleSubmit} className="button" to="/"> share </NavLink>
          </div>
        </form>
     </div>
    );
  }

/////////////////////////////////////////////////////////////////////////////////////////////////

inputChange = (event) => {
  this.setState({
      [event.target.id]: event.target.value
  })
}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createPost(this.state)
    this.setState({
        place: '',
        description: ''     // include photo: ''
    })
  }

  uploadPhoto = () => {
    console.log("need Active Storage")
  }


};


////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {             //totally needed????
  return {
    allUserLocations: state.allUserLocations,
    allPlaces: state.allPlaces,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (post) => dispatch(createPostAction(post)),
    dispatch
  }
  }

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);


//to create a post, need an image, description and location tag
//where do I create the post? in this container? reference MemeWars
// submit button, trigger a Nav link to profile page
//put the buttons into a span
// create the actual post, to push up to the reducer
