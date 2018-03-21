app.factory("productsFactory", ["$http", function($http){
  var factory = {}
  var polls = []
  factory.index = function(callback){
    $http.get('/products')
    .then(function(result){
      callback(result.data)
    })
  }
  factory.index2 = function(id, callback){
    $http.post('/products2', id)
    .then(function(result){
      callback(result.data.result)
    })
  }
  factory.bid = function(data, callback){
    $http.post('/products', data)
    .then(function(result){
      callback(result.data.result)
    })
  }
  return factory
}])
