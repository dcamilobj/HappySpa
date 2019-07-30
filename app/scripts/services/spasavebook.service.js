'use strict';

/**
 * @ngdoc service
 * @name happySpaApp.spasavebook.service
 * @description
 * # spasavebook.service
 * Service in the happySpaApp.
 */
angular.module('happySpaApp').service('spaSaveBook', spaSaveBook)

spaSaveBook.$inject = ['$http','$q'];

function spaSaveBook($http,$q) {

   var save = save;

   function save(body){
    var defered = $q.defer();
    var promise = defered.promise;
    const url = httpConfig.url + httpConfig.book.save
    console.log("desde service: " + body)
    $http.post(url, body)
    .then(function(data){

    })
    .catch(function(err){

    })

    return promise;
   } 
    
  };
