import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { changePageAction } from '../action'

import '../App.css';
import '../index.css'

const linkStyle = {
    width: '200px',
    padding: '12px 18px 12px 20px',
    margin: '0 6px 6px',
    background: '#6433E9',
    textDecoration: 'none',
    color: 'white',
    borderRadius: '4px',
}

class NavBar extends Component {

  handleClick = (event) => {
    this.props.changePage(event.target.href);         // Passing page url here, to reset the state.currentPage
  }

  render() {
    return (
      <div className="App-header">
        <header >
          <img className="Header-image" alt="" />
            <h1 className="App-title">Bon Mappétit</h1>
              <p className="App-slogan">
                indulge a little.
              <span>
      							<NavLink onClick={this.handleClick} activeStyle={{ background: '#666699' }} to="/profile" style={linkStyle}> profile </NavLink>
      							<NavLink onClick={this.handleClick} activeStyle={{ background: '#666699' }} to="/create" style={linkStyle}> create </NavLink>
                    <NavLink onClick={this.handleClick} activeStyle={{ background: '#666699' }} to="/explore" style={linkStyle}> explore </NavLink>
                    <NavLink to="/explore" style={linkStyle}> logout </NavLink>
      				</span>
              </p>
          </header>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////

function mapStateToProps(state) {
  return {
    currentPage: state.currentPage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changePage: (page) => dispatch(changePageAction(page)),
    dispatch
  }
}

////////////////////////////////////////////////////////////////////////////

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

// <NavLink  activeClassName="active" to="/create" style={linkStyle}> Logout </NavLink>
//          <img src={logo} className="App-logo" alt="logo" />
//            import logo from '../images/logo.svg';
