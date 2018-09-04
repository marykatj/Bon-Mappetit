import { NAVIGATION_CLICK, SHARE, USER_SEARCH, FETCH_ALL_DATA, FILTER_JUST_USER_POSTS, COORD_CHANGE } from './types'

const initialState = {
  allUserLocations: [],
  allPlaces: [],

  currentBrowserLocation: {},
  mapWindowArea: {},
  coord: { lat: 40.7053, lng: -74.0140 },   //revise to make browser's current location

  userSearch: '',
  exploreSearch: '',
  createSearch: '',

  currentPage: 'explore'
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case NAVIGATION_CLICK:
      return {...state, currentPage: action.currentPage}
    case SHARE:
      let userPostArray = initialState.allUserLocations
      userPostArray.push(action.newPost)
      let allPostsArray = initialState.allPlaces
      allPostsArray.push(action.newPost)
      return {...state, allUserLocations: userPostArray, allPlaces: allPostsArray}
    case USER_SEARCH:
      return {...state, userSearch: action.term}
    case COORD_CHANGE:
      return {...state, coord: action.coord}
    // case FETCH_All_DATA:
    //   return {...state, allPlaces: action.allPosts}
    case FILTER_JUST_USER_POSTS:
      return {...state, allUserLocations: action.userPosts};
    default: return state;
  }

}
