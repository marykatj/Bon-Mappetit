import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPostAction } from '../../action';
import { NavLink } from 'react-router-dom';
import ExplorePage from '../Explore/ExplorePage';
import { changePageAction } from '../../action'

class CreateForm extends Component {

  state = {
    description: '',
    photo: ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <input type="text" id="place" value={this.props.address} onChange={this.inputChange}/>
          <textarea id="description" value={this.state.description} onChange={this.inputChange}/>
          <div className="button-row">
          <input name="image" type="file" accept="image/*" id="photo" onChange={this.photoChange}/>
          <span>
            <NavLink onClick={this.handleSubmit} className="button" to="/profile"> share </NavLink>
          </span>
          </div>
        </form>
     </div>
    );
  }

/////////////////////////////////////////////////////////////////////////////////////////////////

inputChange = (event) => {
  this.setState({
      [event.target.id]: event.target.value,
  })
}

photoChange = () => {
  const parsedPath = document.getElementById('photo').files[0].name         //both these improve the file path.
  //const parsedPath = event.target.value.replace("C:\\fakepath\\", "");
  console.log(parsedPath)
  this.setState({
    photo: parsedPath
  })
}

  handleSubmit = (event) => {
    this.props.changePage(event.target.href)
    this.props.createPost(this.state)
    this.setState({
        description: '',
        photo: ''
    })
  }
};


////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {      
  return {
    allUserLocations: state.allUserLocations,
    allPlaces: state.allPlaces,
    currentPage: state.currentPage,
    address: state.address
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


//to create a post, need an image, description and location tag
//where do I create the post? in this container? reference MemeWars
// submit button, trigger a Nav link to profile page
//put the buttons into a span
// create the actual post, to push up to the reducer

// onFormSubmit(event){
//   event.preventDefault() // Stop form submit
//   this.fileUpload(this.state.photo).then((response)=>{
//     console.log(response.data);
//   })
// }

//   onChange(event) {
//   this.setState({file:event.target.files[0]})
// }

// fileUpload(file) {
//     const url = 'http://example.com/file-upload';
//     const formData = new FormData();
//     formData.append('file',file)
//     const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     }
//     return  post(url, formData,config)
//   }

// style={{
//   width: 0.1,
//   height: 0.1,
//   opacity: 0,
//   overflow: 'hidden',
//   position: 'absolute',
//   zIndex: -1
// }}

//<File handleFileUpload={this.handleFileUpload}/>
