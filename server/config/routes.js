var mongoose = require("mongoose")
var users =  require("./../controllers/users.js")
var products = require("./../controllers/products.js")


module.exports = function(app){
  app.get('/users', users.index)
  app.post('/users', users.create)
  app.post('/login', users.login)
  app.post('/checkSession', users.checkSession)

  app.get('/products', products.index)
  app.post('/products2', products.index2)
  app.post('/products', products.bid)

}
