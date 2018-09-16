angular.module('service.controller', []).controller("ServiceController", _serviceController)

function _serviceController($scope, $http) {
    $http({
        method: 'GET',
        url: '/db/service.json'
    }).then(function(response) {
        $scope.data = eval(response.data.service);
    }, function(error) {
        console.log('Lỗi 001 - Menu: ' + error);
    });
}