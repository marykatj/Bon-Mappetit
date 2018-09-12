import { NAVIGATION_CLICK, SHARE, USER_SEARCH, FETCH_ALL_DATA, COORD_CHANGE, CREATE_ADDRESS, ADDRESS_TRUE, ADDRESS_FALSE } from './types'

const initialState = {
  allPlaces: [],
  gotAddress: false,

  //currentBrowserLocation: {},
  coord: { lat: 40.7053, lng: -74.0140 },  //eventually render browser location
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
      let allPlacesArray = {...state, allPlaces: state.allPlaces.unshift(action.newPost)}

    case USER_SEARCH:
      return {...state, searchedPosts: action.filteredPosts}

    case CREATE_ADDRESS:
      return {...state, address: action.address}

    case COORD_CHANGE:
      return {...state, coord: action.coord}

    case ADDRESS_TRUE:
      return {...state, gotAddress: true}

    case ADDRESS_FALSE:
      return {...state, gotAddress: false}  

    case FETCH_ALL_DATA:
      return {...state, allPlaces: action.allPosts.reverse()}  //allPlaces: action.allPosts,

    default: return state;
  }

}
