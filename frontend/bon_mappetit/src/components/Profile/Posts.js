import React, { Component } from 'react';

class Posts extends Component {

  render() {
    return (
      <div>
          <div id="card">

            <div>
              <img className="card-image-left" src="https://mdbootstrap.com/img/Photos/Others/men.jpg" alt=""/>
              <a>
                <div></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title"><strong>{this.props.post.location}</strong></h4>
              <p className="card-text">{this.props.post.description}
              </p>
            </div>
          </div>
      </div>
    );
  }

}

export default Posts;
