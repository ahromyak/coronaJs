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

    var aboutState = {
        name: 'about',
        url: '/about',
        controller: 'aboutController',
        templateUrl: 'app/components/about/html/index.html'
    };

    var priceState = {
        name: 'price',
        url: '/price',
        controller: 'priceController',
        templateUrl: 'app/components/price/html/index.html'
    };

    var connectState = {
        name: 'connect',
        url: '/connect',
        controller: 'connectController',
        templateUrl: 'app/components/connect/html/index.html'
    };

    var sitemapState = {
        name: 'sitemap',
        url: '/sitemap',
        controller: 'sitemapController',
        templateUrl: 'app/components/sitemap/html/index.html'
    };

    var oplataState = {
        name: 'oplata',
        url: '/oplata',
        controller: 'oplataController',
        templateUrl: 'app/components/oplata/html/index.html'
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
    $stateProvider.state(aboutState);
    $stateProvider.state(priceState);
    $stateProvider.state(connectState);
    $stateProvider.state(sitemapState);
    $stateProvider.state(oplataState);
    $stateProvider.state(designState);
    $stateProvider.state(codeigniterState);
    $stateProvider.state(zendState);
});