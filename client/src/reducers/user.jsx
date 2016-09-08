import { CREATE, DELETE } from '../constants/UserTypes'

const initialState = {
  name: ''
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
  }
}