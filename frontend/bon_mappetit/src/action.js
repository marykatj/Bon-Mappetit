import { NAVIGATION_CLICK, SHARE } from './types'

export function changePageAction(urlPath) {
  if (urlPath.includes('/profile')) {
    let page = 'profile'
    return { type: 'NAVIGATION_CLICK', currentPage: page}
    }
  else if (urlPath.includes('/create')) {
      let page = 'create'
      return { type: 'NAVIGATION_CLICK', currentPage: page}
    }
  else if (urlPath.includes('/')) {
        let page = 'explore'
        return { type: 'NAVIGATION_CLICK', currentPage: page}
    }
}

// export function fetchMapsAction() {
//   AnimalAdapter.getMaps()
//      .then(url => {
//      dispatch(fetchMapsAction(url))})
//      .then(() => {return {
//         type: 'FETCHED_MAPS'
//        }
//      })
//    }


// why do we need types?
// should i make an adapter file?
// is this action.js file totally neccessary?
