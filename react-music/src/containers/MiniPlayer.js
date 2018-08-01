import React,{Component} from 'react'
import MiniPlayer from '../components/play/Miniplayer'
import {changeSong} from '../redux/actions'
import {connect} from 'react-redux' 
const mapStateToProps=(state)=>({
  currentSong:state.song,
  playSongs:state.songs
})
const mapDispatchToProps=(dispatch)=>({
  changeCurrentSong:(song)=>{
    dispatch(changeSong(song));
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer)