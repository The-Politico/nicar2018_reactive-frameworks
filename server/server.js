const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./server/data/results.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(2222, () => {
  console.log('JSON Server is running')
});
