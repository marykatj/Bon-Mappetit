import React, { Component } from 'react';
import { connect } from 'react-redux';

class Posts extends Component {

// this.props.post.image_url

  render() {
    // console.log(this.props.post.image_url)
    // const railsImage = this.props.post.image_url
    // const midImage = railsImage.replace("/rails/active_storage/blobs", "chrome-extension://oahagehaecaffokbpkdmhdikdkjmimlg");
    // const reactImage = midImage.replace("?disposition=attachment", "");
    // this.props.post.image_url = [reactImage]
    // console.log(this.props.post)

    // 'chrome-extension://oahagehaecaffokbpkdmhdikdkjmimlg/14525080_10153805881462611_7474519788260237313_o.jpg'
    // 'chrome-extension://oahagehaecaffokbpkdmhdikdkjmimlg/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBTQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dad312e92a748f9faf620e5a0e2fa4191ddf5244/14525080_10153805881462611_7474519788260237313_o.jpg'

    // const actualImage = this.props.post.image_url.replace("eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBTQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dad312e92a748f9faf620e5a0e2fa4191ddf5244/", "")

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
