import * as types from '../constants/ActionTypes'
import { setCurrentPost } from '../redux/modules/dashboard'

let nextPostId = 0
let nextTextId = 0
let nextTagId = 0

export function selectPost(postId) {
  return (dispatch) => (
    dispatch({
      'type': types.SELECT_POST,
      postId
    })
  )
}

export function selectTextInPost(textId) {
  return (dispatch) => (
    dispatch({
      'type': types.SELECT_TEXT_IN_POST,
      textId
    })
  )
}

export function addTextToPost(postId, text) {
  return (dispatch) => (
     dispatch({
      'type': types.ADD_TEXT_TO_POST,
      'textId': nextTextId++,
      postId,
      text
    })
  )
}

export function addTagToPost(postId, tag) {
  return (dispatch) => (
    dispatch({
      'type': types.ADD_TAG_TO_POST,
      'tagId': nextTagId++,
      postId,
      tag
    })
  )
}

export function addPost(text) {
  const postId = nextPostId++
  return (dispatch) => ([
    dispatch(setCurrentPost(postId)),
    dispatch({
      'type': types.ADD_POST,
      postId,
      'currentPostId': postId,
      text
    })
  ]
  )
}

export function deletePost(postId) {
  return (dispatch) => (
     dispatch({
      'type': types.DELETE_POST,
      postId
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
