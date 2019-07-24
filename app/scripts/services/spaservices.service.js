/*Para aislar y no llamar funciones globalmente*/ (function(){
'use strict';

/**
 * @ngdoc service
 * @name happySpaApp.spaServices.service
 * @description
 * # spaServices.service
 * Service in the happySpaApp.
 */
angular.module('happySpaApp').service('spaServicesHttp', spaServicesHttp)

spaServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

 function spaServicesHttp($http, $q, httpConfig) {
    let services = {
      getAll: getAll,
      getById: getById
    }

    function getAll(){
      var defered = $q.defer();
      var promise = defered.promise;
      const url = httpConfig.url + httpConfig.services.all
      $http.get(url)
      .then(function (data){
         console.log(data)
         defered.resolve(data);
      })
      .catch(function(error){
        console.log(error);
        defered.reject(error);
      })
      return promise;
    }

    function getById(id){
      var defered = $q.defer();
      var promise = defered.promise;
      const url = httpConfig.url + httpConfig.services.all + id
      $http.get(url)
      .then(function (data){
         console.log(data)
         defered.resolve(data);
      })
      .catch(function(error){
        console.log(error);
        defered.reject(error);
      })
      return promise;
    }

    return services;
  };
})();
