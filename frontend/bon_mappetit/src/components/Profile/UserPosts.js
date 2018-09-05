import React, { Component } from 'react';
import Posts from './Posts'
import { connect } from 'react-redux';

class UserPosts extends Component {

////////////////////////////////////////////////////////////////////////////////

postMapper = () => {
  // let newAddress = this.props.address             // need to make an immutable copy of the address, so its not overwritten. DEEP COPY
  // let lockedAddress = JSON.parse(JSON.stringify(newAddress))

  //need to replace the address in a temporary way.
  //let newAddress = {...this.props.address}

  if (this.props.userSearch === '') {
    return this.props.allUserLocations.map(post => <Posts post={post} key={post} location={this.props.address}/>)
  } else {
       const filteredPosts = this.props.allUserLocations.filter(post => {return (post.place.toLowerCase().includes(this.props.userSearch.toLowerCase()))})
       return filteredPosts.map(post => <Posts post={post} key={post} location={this.state.location}/>)
   }
}

////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
        <div id="userPostsContainer">
          <h2> savor. </h2>
          {this.postMapper()}
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    allUserLocations: state.allUserLocations,
    userSearch: state.userSearch,
    address: state.address
  }
}

export default connect(mapStateToProps)(UserPosts)
