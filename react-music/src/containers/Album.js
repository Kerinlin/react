import { connect } from 'react-redux'
import {showPlayer,changeSong,setSongs} from '@/redux/actions.js'
import Album from '../components/albums/Album'
const mapStateToProps = (state) => ({
  currentSong: state.song,
  playSongs: state.songs
})
const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));
  },
  setSongs:(songs)=>{
    dispatch(setSongs(songs))
  },
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Album)