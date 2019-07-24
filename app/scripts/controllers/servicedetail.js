'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:ServicedetailCtrl
 * @description
 * # ServicedetailCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('ServiceDetailCtrl', serviceDetailCtrl);

serviceDetailCtrl.inject = ['$state', 'spaServicesHttp'];

 function serviceDetailCtrl($state, spaServicesHttp) {
  var vm = this;
  vm.$onInit = onInit;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;

  function onInit(){
   // vm.loadSpaServices();
    vm.loadSpaServicesHttp();
  }


  function loadSpaServicesHttp(){
    let id = $state.params.id;
    spaServicesHttp.getById(id)
    .then(function(result){
      vm.service = result.data;
      console.log(result.data);
    })
    .catch(function(error){
      console.log(error);
    });
    console.log('loadSpaServicesHttp ended');
  }

    console.log('id:', $state.params.id)
  };
