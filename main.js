/**
 * Created by deepwest83 on 9/5/2016.
 */
var cjs = angular.module('myApp', ['ui.router']);

cjs.controller('mainController', function ($scope) {
    $scope.mainNavItems = [
        {
            name: 'Главная',
            id: 1,
            link: 'menu'
        },
        {
            name: 'Опродукции',
            id: 2,
            link: 'menu'
        },
        {
            name: 'Каталог',
            id: 3,
            link: 'menu'
        },
        {
            name: 'Прайс лист',
            id: 4,
            link: 'menu'
        },
        {
            name: 'Обратная связь',
            id: 5,
            link: 'menu'
        },
        {
            name: 'Оплата и доставка',
            id: 6,
            link: 'menu'
        },
        {
            name: 'Контакты',
            id: 7,
            link: 'menu'
        }
    ];
});

cjs.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home");

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'app/components/home/html/home.html',
        controller:'homeController'
    };

    var contactState = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'app/components/home/html/contact.html'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(contactState);

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