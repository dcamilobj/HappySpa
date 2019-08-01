'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:BookserviceCtrl
 * @description
 * # BookserviceCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('BookServiceCtrl', bookServiceCtrl);

serviceDetailCtrl.inject = ['$state', 'spaSaveBook'];
function bookServiceCtrl($state,spaSaveBook) {
  var vm = this;
  vm.form = {};
  vm.submitBook = submitBook;
  vm.$onInit = onInit;

  function onInit(){
  }

  function submitBook(){
    let id = $state.params.id;
    vm.form.service_selected = id;
    spaSaveBook.save(vm.form)
    .then(function(result){
     Swal.fire({
       type: 'success',
       title: 'Bien hecho!',
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
 };
