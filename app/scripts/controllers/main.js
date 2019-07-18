'use strict';
/**
 * @ngdoc function
 * @name happySpaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('MainCtrl', mainCtrl);
mainCtrl.$inject = ['spaServices'];

  function mainCtrl(spaServices) {
    var vm = this;
    vm.$onInit = onInit;
    vm.myName = 'Camilo Bedoya';
    vm.loadSpaServices = loadSpaServices;

    function onInit(){
      vm.loadSpaServices();
    }

    function loadSpaServices(){
      vm.serviceList = spaServices.getAllServices();
      console.log(vm.serviceList);
    }
  }
