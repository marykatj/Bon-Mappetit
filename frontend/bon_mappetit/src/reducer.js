import { NAVIGATION_CLICK, SHARE } from './types'

const initialState = {
  allUserLocations: [],
  allPlaces: [],
  selectedLocation: {},
  search: '',
  currentBrowserLocation: '',
  mapWindowArea: {},
  currentPage: 'explore'
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case 'NAVIGATION_CLICK':
      return {...state, currentPage: action.currentPage}
    case 'SHARE':
      let userPostArray = initialState.allUserLocations
      userPostArray.push(action.newLocation)
      let allPostsArray = initialState.allPlaces
      allPostsArray.push(action.newLocation)
      return (
        {...state, allUserLocations: userPostArray},
        {...state, allPlaces: allPostsArray}
      )
    default: return state;
  }

}

//need to map state to mapStateToProps
// get the input bars working & buttons working
//
