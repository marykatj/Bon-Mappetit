import { NAVIGATION_CLICK, POST_SUBMIT } from './types'

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
    console.log(state.currentPage)  //now need to render.  need to actually navigate to the url
      return {...state, currentPage: action.currentPage}
    default: return state;
  }

}
