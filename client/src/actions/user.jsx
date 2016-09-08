import * as types from '../constants/UserTypes'

export function create() {
  return { type: types.CREATE }
}

export function delete() {
  return { type: types.DELETE }
}