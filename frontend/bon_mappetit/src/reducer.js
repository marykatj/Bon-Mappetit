import { NAVIGATION_CLICK, SHARE, USER_SEARCH, FETCH_ALL_DATA, COORD_CHANGE, CREATE_ADDRESS } from './types'

const initialState = {
  allUserLocations: [],
  //allPlaces: [],

  currentBrowserLocation: {},
  coord: { lat: 40.7053, lng: -74.0140 },
  addressCoord: { lat: 0, lng: 0 },
  address: '',

  //userSearch: '',
  searchedPosts: [],

  currentPage: 'explore'
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case NAVIGATION_CLICK:
      return {...state, currentPage: action.currentPage}

    case SHARE:
    let update = {...state, allUserLocations: state.allUserLocations.push(action.newPost)}
    //let allPostsArray = {...state, allPlaces: state.allPlaces.push(action.newPost)}

    case USER_SEARCH:
      // return {...state, userSearch: action.term}
      console.log(state.searchedPosts)
      return {...state, searchedPosts: action.filteredPosts}

    case CREATE_ADDRESS:
      return {...state, address: action.address}

    case COORD_CHANGE:
      return {...state, addressCoord: action.coord}

    case FETCH_ALL_DATA:
      return {...state, allUserLocations: action.allPosts}  //allPlaces: action.allPosts,

    default: return state;
  }

}
