const koa = require('koa')

const app = new koa();

app.use(async context => {
  context.body = 'hello koa'
})

app.listen(3000, () => {
  console.log('服务器启动成功');
})