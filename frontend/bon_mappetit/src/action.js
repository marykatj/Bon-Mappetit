
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

export function userSearchAction(filteredPosts) {
  return { type: 'USER_SEARCH', filteredPosts: filteredPosts}
  }

export function userCoordinatesAction(coord) {
  return { type: 'COORD_CHANGE', coord: coord }
}

export function createAddressAction(address) {
  return { type: 'CREATE_ADDRESS', address: address }
}

export function addressAlertAction(boolean) {
  return { type: 'ADDRESS_TRUE', gotAddress: boolean }
}

export function addressNoAlertAction(boolean) {
  return { type: 'ADDRESS_FALSE', gotAddress: boolean }
}

export function fetchPostsAction(allPosts) {
  return { type: 'FETCH_ALL_DATA', allPosts: allPosts}
}
