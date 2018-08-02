import React,{Component} from 'react';
import router from 'umi/router'
import {SearchBar,Grid,ListView} from 'antd-mobile'
export default class extends Component {
  constructor(props){
    super(props);
    if(window.location.pathname.indexOf('./home')<0){
        router.replace('/home');
        return 
    }
  }
  state={
    address:'当前地址',
    coords:{},
    rank_id:'',
    isLoading:false
  }
  rets=[]
  dataSource=new ListView.DataSource({
      rowHasChanged:(row1,row2)=>row1 != row2
  })

  componentWillMount(){
    if(window.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        this.state.coords=position.coords;
        this.init(this.state.coords);
      },(err)=>{
        console.log('getCurrentPosition',err);
        this.state.coords={
          latitude:'30.276975',
          longitude:'120.1213'
        };
        this.init(this.state.coords)
      })
    }
  }
  init(coords){
    this.loadTypeData(coords);
    this.loadPoiData(coords);
    this.loadRestaurantData(coords);
  }
  loadTypeData({latitude,longitude}){
    fetch('/restapi/shopping/openapi/entries?latitude=${latitude}&longitude=${longitude}&templates[]=main_template&templates[]=favourable_template&templates[]=svip_template')
      .then(res=>{
        if(res.status===200){
          res.json().then(data=>{
            this.setState({
              headerDate:data
            })
          })
        }
      })
      .catch(err=>{
        console.warn(err)
      })
    console.log(latitude,longitude)
  }
  loadPoiData({latitude,longitude}){
      fetch('/restapi/bgs/poi/reverse_geo_coding?latitude=${latitude}&longitude=${longitude}')
        .then(res=>{
          if(res.status===200){
          res.json().then(data=>{
            this.setState({
              address:data.name
            })
          })
        }
      })
        .catch(err=>{
        console.warn(err)
      })
  }
  loadRestaurantData({latitude,longitude}){

  }
  render(){
    return(
      <div>Home</div>
    )   
  }
}