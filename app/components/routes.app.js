/**
 * Created by devds on 13.09.16.
 */
cjs.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home");

    var homeState = {
        name: 'home',
        url: '/home',
        controller: 'homeController',
        templateUrl: 'app/components/home/html/home.html'
    };

    var projectsState = {
        name: 'projects',
        url: '/projects',
        controller: 'projectsController',
        templateUrl: 'app/components/projects/html/index.html'
    };

    var backendState = {
        name: 'backend',
        url: '/backend',
        controller: 'backendController',
        templateUrl: 'app/components/backend/html/index.html'
    };

    var mobileState = {
        name: 'mobile',
        url: '/mobile',
        controller: 'mobileController',
        templateUrl: 'app/components/mobile/html/index.html'
    };

    var frontendtState = {
        name: 'frontend',
        url: '/frontend',
        controller: 'frontendController',
        templateUrl: 'app/components/frontend/html/index.html'
    };

    var cmsState = {
        name: 'cms',
        url: '/cms',
        controller: 'cmsController',
        templateUrl: 'app/components/cms/html/index.html'
    };

    var designState = {
        name: 'design',
        url: '/design',
        controller: 'designController',
        templateUrl: 'app/components/design/html/index.html'
    };

    var codeigniterState = {
        name: 'backend.codeigniter',
        url: '/codeigniter',
        controller: 'designController',
        templateUrl: 'app/components/design/html/index.html'
    };

    var zendState = {
        name: 'backend.zend',
        url: '/zend',
        controller: 'mobileController',
        templateUrl: 'app/components/mobile/html/index.html'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(projectsState);
    $stateProvider.state(backendState);
    $stateProvider.state(mobileState);
    $stateProvider.state(frontendtState);
    $stateProvider.state(cmsState);
    $stateProvider.state(designState);
    $stateProvider.state(codeigniterState);
    $stateProvider.state(zendState);
});