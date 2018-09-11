import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPostAction, changePageAction } from '../../action';
import { NavLink } from 'react-router-dom';
import ExplorePage from '../Explore/ExplorePage';

const submitStyle = {
    width: '80%',
    padding: '12px 235px 12px 235px',
    background: '#6433E9',
    color: 'white',
    borderRadius: '4px',
}

class CreateForm extends Component {

  state = {
    description: '',
    image_url: '',
    lat: this.props.coord.lat,
    lng: this.props.coord.lng,
  }

  /////////////////////////////////////////////////////////////////////////////

  setPost = () => {

    let formData = new FormData();
    formData.append('address', this.props.address)
    formData.append('description', this.state.description)
    formData.append('image_file', this.state.image_url)
    formData.append('lat', this.state.lat)
    formData.append('lng', this.state.lng)
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
          <label type="text" id="location" value={this.props.address} onChange={this.inputChange}> {this.props.address}</label>
          <textarea id="description" value={this.state.description} onChange={this.inputChange} placeholder="thoughts..."/>
          <div className="button-row">
          <input name="image" type="file" accept="image/*" id="photo" onChange={this.photoChange} className='upload-button'/>
          <p></p>
          <span>
            <NavLink onClick={this.changePage && this.handleSubmit} className="submit-button" to="/profile" style={submitStyle}> share </NavLink>
          </span>
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

photoChange = (event) => {
  // const parsedPath = document.getElementById('photo').files[0].name         //both these improve the file path.
  //const parsedPath = event.target.value.replace("C:\\fakepath\\", "");
  // const imagePath = `chrome-extension://oahagehaecaffokbpkdmhdikdkjmimlg/${parsedPath}`
  this.setState({
    image_url: event.target.files[0]
  })
}

changePage = (event) => {
  this.props.changePage(event.target.href)
}

  handleSubmit = (event) => {
    event.preventDefault();
    this.setPost();
    this.setState({
        description: '',
        image_url: '',
        lat: this.props.coord.lat,
        lng: this.props.coord.lng
    })
  }
};

////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    allUserLocations: state.allUserLocations,
    allPlaces: state.allPlaces,
    currentPage: state.currentPage,
    address: state.address,
    coord: state.coord
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: (post) => dispatch(createPostAction(post)),
    changePage: (page) => dispatch(changePageAction(page)),
    dispatch
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);
