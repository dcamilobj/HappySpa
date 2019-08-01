'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:BookserviceCtrl
 * @description
 * # BookserviceCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('BookServiceCtrl', bookServiceCtrl);

serviceDetailCtrl.inject = ['$state', 'spaSaveBook','spaServicesHttp'];
function bookServiceCtrl($state,spaSaveBook,spaServicesHttp) {
  var vm = this;
  vm.form = {};
  vm.submitBook = submitBook;
  vm.loadSpaServiceInfo = loadSpaServiceInfo;
  vm.$onInit = onInit;

  function onInit(){
    loadSpaServiceInfo();
  }

  function submitBook(){
    let id = $state.params.id;
    vm.form.service_selected = id;
    spaSaveBook.save(vm.form)
    .then(function(result){
     Swal.fire({
       type: 'success',
       title: 'Bien hecho ' + result.data.name + '!' ,
       text: 'La reserva fue almacenada éxitosamente!',
     })
      console.log(result.data);
    })
    .catch(function(error){
     Swal.fire({
       type: 'error',
       title: 'Oops...',
       text: 'Algo salió mal!'
     })
      console.log(error);
    });
  }

  function loadSpaServiceInfo(){
    let id = $state.params.id;
    spaServicesHttp.getById(id)
    .then(function(result){
      vm.serviceInfo = result.data;
    })
    .catch(function(error){
      console.log(error);
    });
    console.log('loadSpaServicesHttp ended');
  }
 };
