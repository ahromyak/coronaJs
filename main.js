/**
 * Created by deepwest83 on 9/5/2016.
 */
var cjs = angular.module('myApp', ['ui.router']);

cjs.controller('mainController', function ($scope) {


    $scope.mainMenu = false;

    // var acc = document.getElementsByClassName("accordion");
    // var i;
    //
    // for (i = 0; i < acc.length; i++) {
    //     acc[i].onclick = function(){
    //         this.classList.toggle("active");
    //         this.nextElementSibling.classList.toggle("show");
    //     }
    // }
    //
    // var menuList = document.getElementsByClassName("dng-hide");
    //
    // for (var menu in menuList) {
    //     if (!menuList.hasOwnProperty(menu)) {
    //         continue;
    //     }
    //     menuList[menu].onclick = function(){
    //         document.getElementsByClassName("panel")[0].classList.remove('show');
    //     };
    // }

});