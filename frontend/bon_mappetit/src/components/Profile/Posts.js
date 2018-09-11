import React, { Component } from 'react';

class Posts extends Component {

  render() {
    return (
      <div>
      <img className="card-image-left" src={this.props.post.image_url} alt=""/>
          <div id="card">

            <div>
              <a>
                <div></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title"><strong>{this.props.post.address}</strong></h4>
              <p className="card-text">{this.props.post.description}
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
