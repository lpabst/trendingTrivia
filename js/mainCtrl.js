angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){

$scope.animalSearch = false;
$scope.difficulty = 0;
$scope.showModal = false;
$scope.addingQuestion = true;
$scope.editingQuestion = false;


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

$scope.editQuestion = function(i){
    $scope.showModal = true;

    $scope.questionInfo = $scope.questions[i].question;
    $scope.optionsInfo = $scope.questions[i].options;
    $scope.difficultyInfo = $scope.questions[i].difficulty;
    $scope.animalInfo = $scope.questions[i].animal;
    $scope.idInfo = $scope.questions[i].id;

    // $scope.addingQuestion = false;
    // $scope.editingQuestion = true;
}

$scope.addQuestion = function(){
    $scope.showModal = true;
    $scope.addingQuestion = true;
    $scope.editingQuestion = false;
}

$scope.editData = function(){

    var obj = {
        question: $scope.questionInfo,
        options: $scope.optionsInfo,
        difficulty: $scope.difficultyInfo,
        animal: $scope.animalInfo,
        id: $scope.idInfo
    }


    mainService.editData(obj).then(function(){
        $scope.getData();
    })
    
}

$scope.addQuestionToServer = function(){

    var obj = {
        question: $scope.questionInfo,
        options: $scope.optionsInfo,
        difficulty: $scope.difficultyInfo,
        animal: $scope.animalInfo,
    }

    mainService.addQuestionToServer(obj).then(function(){
        $scope.getData();
    })

}


});