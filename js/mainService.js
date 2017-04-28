angular.module('myApp').service('mainService', function($http){

var page = 0;

this.getData = function(){
    return $http.get('https://practiceapi.devmountain.com/api/trivia/questions/?page='+page);
}

this.next = function(){
    if (page < 2){
        page += 1;
    }
   
}

this.previous = function(){
    page -= 1;
}


});