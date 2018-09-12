import React, { Component } from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { connect } from 'react-redux';
import { createPostAction, changePageAction, fetchPostsAction, addressNoAlertAction } from '../../action';
import { withRouter, NavLink } from 'react-router-dom';
import ExplorePage from '../Explore/ExplorePage';
import { push } from 'react-router-redux';

const submitStyle = {
    width: '80%',
    padding: '12px 235px 12px 235px',
    background: '#6433E9',
    color: 'white',
    borderRadius: '4px',
    textDecoration: 'none',
}

class CreateForm extends Component {

  state = {
    description: '',
    image_url: '',
    rerender: false
  }


  /////////////////////////////////////////////////////////////////////////////

  setPost = () => {

    let formData = new FormData();
    formData.append('address', this.props.address)
    formData.append('description', this.state.description)
    formData.append('image_file', this.state.image_url)
    formData.append('lat', this.props.coord.lat)
    formData.append('lng', this.props.coord.lng)
    formData.append('user_id', 1)

    const config = {
      method:'POST',
      body: formData,
    }

  fetch('http://localhost:3000/api/v1/posts/', config)
    .then(response => response.json())
    .then(data => {this.props.createPost(data)})

}

///////////////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div >
        <form onSubmit={this.handleSubmit} >
          <label type="text" id="location" value={this.props.address} onChange={this.inputChange}> {this.props.gotAddress === true ? this.props.address : null}</label><p></p>
          <textarea id="description" value={this.state.description} onChange={this.inputChange} placeholder="thoughts..."/>
          <div className="button-row">
          <input name="image" type="file" accept="image/*" id="photo" onChange={this.photoChange} className='upload-button'/>
          <p></p>
          <span>
            <button onClick={this.handleSubmit} className="submit-button" style={submitStyle}> share </button>
          </span>
          </div>
        </form>
     </div>
    );
  }

//<NavLink onClick={this.handleSubmit} className="submit-button" to="/profile" style={submitStyle}> share </NavLink>
//&& this.changePage &&
/////////////////////////////////////////////////////////////////////////////////////////////////

inputChange = (event) => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

photoChange = (event) => {
  // const parsedPath = document.getElementById('photo').files[0].name         //both these improve the file path.
  //const parsedPath = event.target.value.replace("C:\\fakepath\\", "");
  // const imagePath = `chrome-extension://oahagehaecaffokbpkdmhdikdkjmimlg/${parsedPath}`
  this.setState({
    image_url: event.target.files[0]
  })
}

// changeToProfile = () => {
//   this.props.changePage('/profile');
// }

  handleSubmit = (event) => {
    event.preventDefault();
    //event.stopPropagation();
    this.setPost();
    this.setState({
        description: '',
        image_url: '',
    })
    this.props.addressNoAlert(false)
    this.props.history.push('/profile')
    // this.changeToProfile();
  }



};

////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    allUserLocations: state.allUserLocations,
    //allPlaces: state.allPlaces,
    currentPage: state.currentPage,
    address: state.address,
    coord: state.coord,
    gotAddress: state.gotAddress
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (post) => dispatch(createPostAction(post)),
    changePage: (page) => dispatch(changePageAction(page)),
    addressNoAlert: (boolean) => dispatch(addressNoAlertAction(boolean)),
    dispatch
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
