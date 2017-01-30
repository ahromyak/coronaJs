/**
 * Created by deepwest83 on 9/5/2016.
 */
var cjs = angular.module('myApp', ['ui.router']);

cjs.controller('mainController', function ($scope, $http) {


    $scope.mainMenu = false;

    $http.get('/api/client/categorys.php').success(function (data) {
        $scope.categorys = data;
    });


});