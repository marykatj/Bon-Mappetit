import React, { Component } from 'react';
import Posts from './Posts'
import uuid  from 'uuid'
import { connect } from 'react-redux';

class UserPosts extends Component {

////////////////////////////////////////////////////////////////////////////////

postMapper = () => {

  //let newAddress = [...this.props.address]             // need to make an immutable copy of the address, so its not overwritten. DEEP COPY
  // let lockedAddress = JSON.parse(JSON.stringify(newAddress))

  //need to replace the address in a temporary way.
  //let newAddress = {...this.props.address}

  //location={this.props.address}

  // if (this.props.userSearch === '') {
     return this.props.allUserLocations.map(post => <Posts post={post} key={uuid()} />)
  // } else {
  //   console.log(this.props.userSearch)
  //      const filteredPosts = this.props.allUserLocations.filter(post => {return (post.address.toLowerCase().includes(this.props.userSearch.toLowerCase()))})
  //      return filteredPosts.map(post => <Posts post={post} key={uuid()} location={this.props.address}/>)
  //  }
}

////////////////////////////////////////////////////////////////////////////////

  render() {
    return (
        <div id="userPostsContainer">
          {this.postMapper()}
        </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    allUserLocations: state.allUserLocations,
    userSearch: state.userSearch
  }
}

export default connect(mapStateToProps)(UserPosts)
