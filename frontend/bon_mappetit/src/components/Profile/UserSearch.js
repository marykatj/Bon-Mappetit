import React, { Component } from 'react';

class UserSearch extends Component {

    render() {
      return (
        <div className="User-search">
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='Find your places...' />
      </form>
    </div>
      )
    }

}

export default UserSearch;

// form      onSubmit={(event)=>{event.preventDefault(); props.beginSearch()}}
// onChange={(event)=>props.changeSearch(event.target.value)}
// value={props.searchValue}
