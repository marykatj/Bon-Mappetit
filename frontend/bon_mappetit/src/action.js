
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


  // export function fetchPostsAction(data) {
  //   return { type: 'FETCH_ALL_DATA', allPosts: data}
  //   }
  //
  //   export function userPostsAction(filteredPosts) {
  //     return { type: 'FILTER_JUST_USER_POSTS', userPosts: filteredPosts}
  //     }


// export function fetchMapsAction() {
//   AnimalAdapter.getMaps()
//      .then(url => {
//      dispatch(fetchMapsAction(url))})
//      .then(() => {return {
//         type: 'FETCHED_MAPS'
//        }
//      })
//    }
