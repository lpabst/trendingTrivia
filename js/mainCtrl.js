angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){

$scope.animalSearch = false;
$scope.difficulty = 0;
$scope.showModal = false;
$scope.addingQuestion = true;


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

$scope.showAnimalSearchBox = function(){
    $scope.animalSearch = true;
}

$scope.allAnimals = function(){
    $scope.animalSearch = false;
    $scope.filterDifficulty(0);
}

$scope.filterDifficulty = function(num){
    $scope.difficulty = num;
}

$scope.showQuestion = function(diff){
    if ($scope.difficulty === 0 || $scope.difficulty === diff){
        return true;
    }else{
        return false;
    }
}

$scope.closeModal = function(){
    $scope.showModal = false;
}

$scope.editQuestion = function(){
    $scope.showModal = true;
    $scope.addingQuestion = false;
}

$scope.addQuestion = function(){
    $scope.showModal = true;
    $scope.addingQuestion = true;
}


});