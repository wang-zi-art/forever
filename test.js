const Koa = require ('koa');
const app = new Koa();
app.use((ctx,next)=>{
    ctx.response.body = "hello,world";
})
app.listen(3389,()=>{
    console.log('服务器启动成功');
})
