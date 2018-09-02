import React, { Component } from 'react';

class Posts extends Component {

  // constructor(props) {
  //   this.id = props.id;
  //   this.place = props.place;
  //   this.description = props.description;
  //   this.image = props.image;                    //user_id?
  //   Post.all.push(this);
  // }

  render() {
    return (
      <div>
          <div id="card">

            <div>
              <img className="card-image-left" src={this.props.post.photo} alt=""/>
              <a>
                <div></div>
              </a>
            </div>

            <div className="card-body">
              <h4 className="card-title"><strong>{this.props.post.place}</strong></h4>
              <p className="card-text">{this.props.post.description}
              </p>
              <button data-id={this.props.post.id}>edit</button>
            </div>
          </div>
      </div>
    );
  }

}

export default Posts;
