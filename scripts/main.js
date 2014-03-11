require.config({
    paths: {
        'angular': 'vendor/angular.min',
        'angular-route': 'vendor/angular-route.min',
        'domReady': 'vendor/domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },
    deps: [      
        './helper/bootstrap'
    ]
});
