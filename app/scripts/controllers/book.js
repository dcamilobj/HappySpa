'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = [ 'spaSaveBook'];
 function bookCtrl(spaSaveBook) {
   var vm = this;
   vm.form = {};
   vm.submitBook = submitBook;
   vm.$onInit = onInit;

   function onInit(){
     console.log("Book")
   }

   function submitBook(){
     console.log('formulario: ', vm.form)
     spaSaveBook.save(vm.form)
     .then(function(result){
       vm.serviceList = result.data;
     })
     .catch(function(error){
       console.log(error);
     });
   }

   
   function loadSpaServicesHttp(){
    console.log('loadSpaServicesHttp started');
    spaServicesHttp.getAll()
    .then(function(result){
      vm.serviceList = result.data;
    })
    .catch(function(error){
      console.log(error);
    });
    console.log('loadSpaServicesHttp ended');
  }
  };
