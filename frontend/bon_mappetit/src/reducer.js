import { NAVIGATION_CLICK, SHARE, USER_SEARCH, CREATE_SEARCH, EXPLORE_SEARCH } from './types'

const initialState = {
  allUserLocations: [],
  allPlaces: [],

  selectedLocation: {},
  currentBrowserLocation: '',
  mapWindowArea: {},

  userSearch: '',
  exploreSearch: '',
  createSearch: '',

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
    case 'USER_SEARCH':
      return {...state, userSearch: action.term}
    case 'CREATE_SEARCH':
      return {...state, createSearch: action.term}
    default: return state;
  }

}
