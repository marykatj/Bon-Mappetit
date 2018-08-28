import React, { Component } from 'react'

class ExploreSearch extends Component {

    render() {
      return (
        <div>
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='Search an area...' />
      </form>
    </div>
      )
    }

}

export default ExploreSearch;

// form      onSubmit={(event)=>{event.preventDefault(); props.beginSearch()}}
// onChange={(event)=>props.changeSearch(event.target.value)}
// value={props.searchValue}
