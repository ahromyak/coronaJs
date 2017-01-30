/**
 * Created by devds on 13.09.16.
 */
cjs.controller('connectController', function ($scope, $http) {
    $scope.mainTest = 'mobile World Hello';

    $http.get('/api/client/main.php').success(function(data) {


        console.log('ok');
        console.log(data);

        $scope.objects = data;
    });
});