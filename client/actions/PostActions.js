import * as types from '../constants/ActionTypes'

let nextPostId = 0

export function addPost(text) {
  return (dispatch) => (
     dispatch({
      'type': types.ADD_POST,
      'id': nextPostId++,
      text
    })
  )
}

export function toggleFavorite(id) {
  return (dispatch) => (
    dispatch({
      'type': types.TOGGLE_FAVORITE,
      id
    })
  )
}

export function setVisibilityFilter(filter) {
  return {
    'type': types.SET_VISIBILITY_FILTER,
    filter
  }
}
