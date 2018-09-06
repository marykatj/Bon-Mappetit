import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {

  render() {
    console.log(this.props.post.image_url)

    return (
      <div>
          <div id="card">

            <div>
              <img className="card-image-left" src={this.props.post.image_url} alt=""/>
              <a>
                <div></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title"><strong>{this.props.location}</strong></h4>
              <p className="card-text">{this.props.post.description}
              </p>
            </div>
          </div>
      </div>
    );
  }

// <button data-id={this.props.post.id}>edit</button>

}

function mapStateToProps(state) {
  return {
    address: state.address
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps)(Posts);
