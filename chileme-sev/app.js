const Koa = require('koa');
const App = new Koa();

//引入配置文件
const cfg = require('./config')

App.use(async,ctx => {
    ctx.body = 'hello world'
})


App.listen(cfg.port)

Console.log('server is running at http://localhost:$(cfg.port)')