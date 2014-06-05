
function IndexCtrl($scope,$http, $routeParams, services) {
  $scope.form = {};
  $scope.login = function() {
  }

}

function forEach(array, fn) {
	for(var i = 0; i<array.length;i++) {
		fn(array[i]);
	}
}
