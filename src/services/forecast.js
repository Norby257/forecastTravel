app.factory('forecast', ['$http', function($http){
    return
 $http.get('url and query string here')

 .success(function(data){
     return data;
 })

 .error(function(err){
     return err;
 });


}]);