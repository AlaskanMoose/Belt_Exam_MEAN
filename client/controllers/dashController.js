app.controller("dashController", function($scope, $location, usersFactory, productsFactory){
  usersFactory.checkSession(function(isValid){
    if(!isValid.result){
      $scope.errors = []
      $location.url('/main')
    }else {
      $scope.userID = isValid.user
    }
  })
  $scope.products = {}
  $scope.bid = {}
  function setProducts(data){
    $scope.products = data
  }
  productsFactory.index(setProducts)

  function setProducts2(data){
    $scope.products2 = {}
    $scope.products2 = data
  }
  $scope.bid = function(id){
    $scope.data.id = id
    productsFactory.bid($scope.data, function(data){
      productsFactory.index2($scope.data, setProducts2)
      console.log($scope.products2)
      $scope.data = {}
    })
  }
})
