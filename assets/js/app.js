
var cjs=angular.module('myApp',['ui.router']);cjs.controller('mainController',["$scope","$http",function($scope,$http){$scope.mainMenu=false;$http.get('/api/client/categorys.php').success(function(data){$scope.categorys=data;});}]);cjs.config(["$stateProvider","$urlRouterProvider","$locationProvider",function($stateProvider,$urlRouterProvider,$locationProvider){$locationProvider.html5Mode(true);$urlRouterProvider.otherwise("/home");var homeState={name:'home',url:'/home',controller:'homeController',templateUrl:'app/components/home/html/home.html'};var aboutState={name:'about',url:'/about',controller:'aboutController',templateUrl:'app/components/about/html/index.html'};var priceState={name:'price',url:'/price',controller:'priceController',templateUrl:'app/components/price/html/index.html'};var connectState={name:'connect',url:'/connect',controller:'connectController',templateUrl:'app/components/connect/html/index.html'};var sitemapState={name:'sitemap',url:'/sitemap',controller:'sitemapController',templateUrl:'app/components/sitemap/html/index.html'};var oplataState={name:'oplata',url:'/oplata',controller:'oplataController',templateUrl:'app/components/oplata/html/index.html'};var designState={name:'design',url:'/design',controller:'designController',templateUrl:'app/components/design/html/index.html'};var codeigniterState={name:'backend.codeigniter',url:'/codeigniter',controller:'designController',templateUrl:'app/components/design/html/index.html'};var zendState={name:'backend.zend',url:'/zend',controller:'mobileController',templateUrl:'app/components/mobile/html/index.html'};$stateProvider.state(homeState);$stateProvider.state(aboutState);$stateProvider.state(priceState);$stateProvider.state(connectState);$stateProvider.state(sitemapState);$stateProvider.state(oplataState);$stateProvider.state(designState);$stateProvider.state(codeigniterState);$stateProvider.state(zendState);}]);cjs.controller('aboutController',["$scope",function($scope){$scope.mainTest='project Hello world';}]);cjs.controller('connectController',["$scope","$http",function($scope,$http){$scope.mainTest='mobile World Hello';$http.get('/api/client/main.php').success(function(data){console.log('ok');console.log(data);$scope.objects=data;});}]);cjs.controller('designController',["$scope",function($scope){$scope.mainTest='design Hello world';}]);cjs.controller('homeController',["$scope",function($scope){$scope.mainTest='home Hello world';}]);cjs.controller('oplataController',["$scope",function($scope){$scope.mainTest='price Hello world';}]);cjs.controller('priceController',["$scope",function($scope){$scope.mainTest='price Hello world';}]);cjs.controller('sitemapController',["$scope",function($scope){$scope.mainTest='frontend Hello world controller';}]);