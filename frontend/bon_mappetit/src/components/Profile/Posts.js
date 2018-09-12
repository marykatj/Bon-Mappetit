import React, { Component } from 'react';

class Posts extends Component {

  render() {
    return (
      <div id="card">
      <img className="card-image-left" src={this.props.post.image_url} alt=""/>
          <div>

            <div>
              <a>
                <div></div>
              </a>
            </div>

            <div className="card-body">
              <h3 className="card-title"><strong>{this.props.post.address}</strong></h3>
              <p className="card-text"><h3>{this.props.post.description}</h3>
              </p>
            </div>
          </div>
      </div>
    );
  }

// <button data-id={this.props.post.id}>edit</button>

}


////////////////////////////////////////////////////////////////////////////

export default Posts;
