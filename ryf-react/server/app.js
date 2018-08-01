const Koa=require('koa');
const cors =require('koa-cors')
const app = new Koa();
const router=require('../routers/index');

// 组件，中间件（middleware）
// const main=ctx=>{
//   ctx.response.body='hello world';
// }
// app.use(main);


app.use(cors({
  origin:'http://localhost:3000',
  exposeHeaders: ['WWW-Authenticate','Server-Authenticate'],
  maxAge:5,
  credentials:true,
  allowMethods:['GET','POST'],
  allowHeader:['Content-Type','Authorization','Accept']
}));
app.use(router.routes())
app.listen(3006);
console.log('app started at 3006 port');
