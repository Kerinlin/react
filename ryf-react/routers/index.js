const router = require('koa-router')();
const koaBody=require('koa-body')
const User = require('../server/model/user');
router.get('/', async (ctx)=>{
  ctx.body="首页"
});
router.get('/users', async (ctx) => {
  const users=await User.findAll({
    isdelete:0
  })
  ctx.body=user;
});
router.post('/user',koaBody(),async(ctx)=>{
  // console.log(ctx.request.body);
  const user=await User.build(ctx.request.body).save();
  ctx.body=user;
  ctx.body={
    status:'ok'
  }
})
module.exports=router;

