angular.module('service.router', []).config(_serviceRoute)

function _serviceRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('service', {
            url: '/service',
            data: {
                pageTitle: 'Các dịch vụ'
            },
            views: {
                "@": {
                    controller: 'ServiceController',
                    templateUrl: '/views/service.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}