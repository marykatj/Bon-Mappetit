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
      userPostArray.push(action.newPost)
      let allPostsArray = initialState.allPlaces
      allPostsArray.push(action.newPost)
      return {...state, allUserLocations: userPostArray, allPlaces: allPostsArray}
    default: return state;
  }

}
