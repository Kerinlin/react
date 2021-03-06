import * as ActionTypes from './actionTypes'
export function changeSong(song) {
  return {
    type:ActionTypes.CHANGE_SONE,
    song, 
  }
}
export function showPlayer(showStatus) {
  return{
    type:ActionTypes.SHOW_PLAYER,
    showStatus
  }
}
export function setSongs(songs) {
  return {
    type: ActionTypes.SET_SONGS,
    songs
  }
}

export function removeSongs(id) {
  return {
    type: ActionTypes.REMOVE_SONG_FROM_LIST,
    id
  }
}
