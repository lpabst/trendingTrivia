angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){


$scope.getData = function(){
    mainService.getData().then(function(response){
        $scope.questions = response.data;
    })
}

$scope.getData();

$scope.next = function(){
    mainService.next();
    $scope.getData();
}

$scope.previous = function(){
    mainService.previous();
    $scope.getData();
}


});