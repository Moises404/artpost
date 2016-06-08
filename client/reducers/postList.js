import * as types from '../constants/ActionTypes'
import post from './post'

export default function todos(state = {}, action) {
	switch (action.type) {
	  case types.ADD_POST:
	    return [
				...state,
				post(undefined, action)

	    ]
	  case types.TOGGLE_FAVORITE:
	    return state.map(t =>
	        post(t, action)
	    )
	  default:
	    return state
	}
}
