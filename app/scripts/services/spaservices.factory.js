'use strict';

/**
 * @ngdoc service
 * @name happySpaApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the happySpaApp.
 */
angular.module('happySpaApp').factory('spaServices', spaServices);

spaServices.$inject = [];
  
  function spaServices () {
 
    var dataServices = [
      { id:1,
        name: 'Masaje sencillo',
        cost: '60,000',
        description: '30 min de una genial final',
        happyEnd: false,
        image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'
      },
      {
        id:2,
        name: 'Exfoliación',
        cost: '600,000',
        description: '1 hora de una genial final',
        happyEnd: true,
        image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'
      },
      {
        id:3,
        name: 'Masaje full',
        cost: '1,000,000',
        description: '5 hora de una genial final',
        happyEnd: true,
        image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'
      }
    ];
  
    var services = {
      getAllServices: getAllServicesMethod,
      getServicesById: getServicesById 
    }

    return services;
    
    function getAllServicesMethod(){
      return dataServices;
    }

    function getServicesById (id){
      for(var i = 0; i < dataServices.length; i++ ){
        if(id == dataServices[i].id){
          return dataServices[i];
        }
        return null;
      }
    }
  }
