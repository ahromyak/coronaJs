/**
 * Created by deepwest83 on 9/5/2016.
 */
var cjs = angular.module('myApp', ['ui.router']);

cjs.controller('mainController', function ($scope) {
    $scope.mainNavItems = [
        {
            name: 'Главная',
            id: 1,
            link: 'home'
        },
        {
            name: 'Опродукции',
            id: 2,
            link: 'contact'
        },
        {
            name: 'Каталог',
            id: 3,
            link: 'catalog'
        },
        {
            name: 'Прайс лист',
            id: 4,
            link: 'pricelist'
        },
        {
            name: 'Обратная связь',
            id: 5,
            link: 'contact'
        },
        {
            name: 'Оплата и доставка',
            id: 6,
            link: 'payterm'
        },
        {
            name: 'Контакты',
            id: 7,
            link: 'contact'
        }
    ];
});

cjs.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /home
    $urlRouterProvider.otherwise("/home");

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'app/components/home/html/home.html',
        controller:'homeController'
    };

    var catalogState = {
        name: 'catalog',
        url: '/catalog',
        templateUrl: 'app/components/catalog/html/catalog.html'
    };

    var pricelistState = {
        name: 'pricelist',
        url: '/pricelist',
        templateUrl: 'app/components/pricelist/html/pricelist.html'
    };

    var paytermState = {
        name: 'payterm',
        url: '/payterm',
        templateUrl: 'app/components/payterm/html/payterm.html'
    };

    var contactState = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'app/components/contact/html/contact.html'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
    $stateProvider.state(paytermState);
    $stateProvider.state(pricelistState);
    $stateProvider.state(catalogState);

    // $stateProvider
    //     .state('/home', {
    //         views: {
    //             'home': {
    //                 templateUrl: 'app/components/home/html/home.html',
    //                 controller: 'mainController'
    //             },
    //         }
    //     })
});