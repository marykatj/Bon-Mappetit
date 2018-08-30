import { NAVIGATION_CLICK, SHARE, USER_SEARCH, CREATE_SEARCH, EXPLORE_SEARCH } from './types'

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

export function createPostAction(post) {
  return { type: 'SHARE', newPost: post}
  }

  export function userSearchAction(term) {
    return { type: 'USER_SEARCH', term: term}
    }

    export function createSearchAction(term) {
      return { type: 'CREATE_SEARCH', term: term}
      }

      export function exploreSearchAction(term) {
        return { type: 'EXPLORE_SEARCH', term: term}
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
