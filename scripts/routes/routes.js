define(['../app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/page1', {
            templateUrl: 'views/parte1.html',
            controller: 'primeiroController'
        });

        $routeProvider.when('/page2', {
            templateUrl: 'views/parte2.html',
            controller: 'segundoController'
        });

        $routeProvider.otherwise({
            redirectTo: '/page1'
        });
    }]);
});
