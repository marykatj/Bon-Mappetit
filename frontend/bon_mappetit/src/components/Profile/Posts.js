import React, { Component } from 'react';
import { connect } from 'react-redux';
//import coffee from '../../images/Coffee.jpg'

class Posts extends Component {

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
              <h4 className="card-title"><strong>{this.props.post.address}</strong></h4>
              <p className="card-text">{this.props.post.description}
              </p>
              <button data-id={this.props.post.id}>edit</button>
            </div>
          </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    address: state.address
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps)(Posts);
