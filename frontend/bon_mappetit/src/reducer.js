import { NAVIGATION_CLICK, SHARE, USER_SEARCH, FETCH_ALL_DATA, FILTER_JUST_USER_POSTS, COORD_CHANGE, CREATE_ADDRESS } from './types'

const initialState = {
  allUserLocations: [],
  allPlaces: [],

  currentBrowserLocation: {},
  coord: { lat: 40.7053, lng: -74.0140 },   //revise to make browser's current location
  address: '',

  userSearch: '',

  currentPage: 'explore'
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case NAVIGATION_CLICK:
      return {...state, currentPage: action.currentPage}

    case SHARE:
      let userPostArray = state.allUserLocations
      userPostArray.push(action.newPost)
      let allPostsArray = state.allPlaces
      allPostsArray.push(action.newPost)
      let allMarkersA = state.allMarkers
      allMarkersA.push(action.newPost)
      let userMarkersA = state.userMarkers
      userMarkersA.push(action.newPost)
      return {...state, allUserLocations: userPostArray, allPlaces: allPostsArray, userMarkers: allMarkersA, allMarkers: userMarkersA}

    case USER_SEARCH:
      return {...state, userSearch: action.term}

    case COORD_CHANGE:
      let userMarkersArray = state.userMarkers
      userMarkersArray.push(action.coord)
      let allMarkersArray = state.allMarkers
      allMarkersArray.push(action.coord)
      return {...state, coord: action.coord, allMarkers: allMarkersArray, userMarkers: userMarkersArray}

    case CREATE_ADDRESS:
      return {...state, address: action.address}

    case FETCH_ALL_DATA:
      return {...state, allPlaces: action.allPosts, allUserLocations: action.allPosts, allMarkers: action.allPosts, userMarkers: action.allPosts}

    case FILTER_JUST_USER_POSTS:
      return {...state, allUserLocations: action.userPosts};

    default: return state;
  }

}
