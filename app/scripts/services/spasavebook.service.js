(function(){
'use strict';

/**
 * @ngdoc service
 * @name happySpaApp.spasavebook.service
 * @description
 * # spasavebook.service
 * Service in the happySpaApp.
 */
angular.module('happySpaApp').service('spaSaveBook', spaSaveBook)

spaSaveBook.$inject = ['$http','$q','httpConfig'];

function spaSaveBook($http,$q, httpConfig) {
  
  let services = {
    save: save
  }

   function save(body){
   var defered = $q.defer();
   var promise = defered.promise;
   const url = httpConfig.url + httpConfig.book.save
   $http.post(url, body)
    .then(function(data){
      defered.resolve(data);
    })
    .catch(function(err){
      defered.reject(err);
    })

    return promise;
   } 
    return services;
  };
})();