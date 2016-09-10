/**
 * Created by deepwest83 on 9/5/2016.
 */
var cjs = angular.module('myApp', ['ui.router']);

cjs.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home");

    var homeState = {
        name: 'home',
        url: '/home',
        templateUrl: 'app/components/home/html/home.html'
    };

    var contactState = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'app/components/home/html/contact.html'
    };

    $stateProvider.state(homeState);
    $stateProvider.state(contactState);
});