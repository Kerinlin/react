const Sequelize=require('sequelize')

// 数据库 sql  koa数据json obj
const sequelize = new Sequelize('antd','root','root',{
  host:'localhost',
  dialect:'mysql',
  operatorsAliases:true,
  pool:{
    max:5,
    min:0,
    acquire:30000,
    idle:1000
  },
  define:{
    timestamps:false
  }
})
sequelize
  .authenticate()
  .then(()=>{
    console.log('连接成功'); 
  })
  .catch(err=>{
    console.log('连接失败');
  })
module.exports = sequelize