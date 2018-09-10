
export function changePageAction(urlPath) {
  if (urlPath.includes('/profile')) {
    let page = 'profile'
    return { type: 'NAVIGATION_CLICK', currentPage: page}
    }
  else if (urlPath.includes('/create')) {
      let page = 'create'
      return { type: 'NAVIGATION_CLICK', currentPage: page}
    }
  else if (urlPath.includes('/explore')) {
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

export function userCoordinatesAction(coord) {
  return { type: 'COORD_CHANGE', coord: coord }
}

export function createAddressAction(address) {
  return { type: 'CREATE_ADDRESS', address: address }
}

export function fetchPostsAction(allPosts) {
  return { type: 'FETCH_ALL_DATA', allPosts: allPosts}
}

export function fetchMarkersAction(allMarkers) {
  return { type: 'FETCH_MARKERS', allMarkers: allMarkers}
}
  //
  //   export function userPostsAction(filteredPosts) {
  //     return { type: 'FILTER_JUST_USER_POSTS', userPosts: filteredPosts}
  //     }
