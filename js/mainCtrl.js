angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){

$scope.animalSearch = false;
$scope.correct;


$scope.getData = function(){
    mainService.getData().then(function(response){
        $scope.questions = response.data;
        console.log(response);
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

$scope.addClass = function(correctAnswer, selectedAnswer){

    if (correctAnswer === selectedAnswer){
        $scope.correct = true;
    }else{
        $scope.correct = false;
    }
    console.log($scope.correct);
}

$scope.showAnimalSearchBox = function(){
    $scope.animalSearch = true;
}

$scope.hideAnimalSearchBox = function(){
    $scope.animalSearch = false;
}


});