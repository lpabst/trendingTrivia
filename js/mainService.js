angular.module('myApp').service('mainService', function($http){

var page = 0;
var editQuestionId = 0;

this.getData = function(){
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/?page='+page);
}

this.editData = function(obj){
    editQuestionId = obj.id;
    return $http.put('https://practiceapi.devmountain.com/api/trivia/questions/:'+editQuestionId, obj)
}

this.addQuestionToServer = function(obj){
    return $http.post('https://practiceapi.devmountain.com/api/trivia/questions', obj);
}

this.next = function(){
    page += 1;
}

this.previous = function(){
    page -= 1;
}


});