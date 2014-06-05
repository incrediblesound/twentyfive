
function IndexCtrl($scope, $http, $location, services) {
  $scope.reg = {};
  $scope.login = {};
  $scope.register = function() {
    if($scope.reg.type === 'user') {
      $http.post('/newuser', $scope.reg).success(function(data){
        $location.url('/newuser');
      })
    } else {
      $http.post('/newcause', $scope.reg).success(function(data){
        $location.url('/newcause');
      })
    }
  }
  $scope.login = function(){}
}

function UserCtrl($scope) {

}

function CauseCtrl($scope) {

}

function forEach(array, fn) {
	for(var i = 0; i<array.length;i++) {
		fn(array[i]);
	}
}
