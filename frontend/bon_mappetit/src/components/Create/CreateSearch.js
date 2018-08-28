import React, { Component } from 'react'

class CreateSearch extends Component {

    render() {
      return (
        <div>
          <form id="search-form">
            <input id="search-bar" type='input' placeholder='Where are you?' />
      </form>
    </div>
      )
    }

}

export default CreateSearch;

// form      onSubmit={(event)=>{event.preventDefault(); props.beginSearch()}}
// onChange={(event)=>props.changeSearch(event.target.value)}
// value={props.searchValue}
