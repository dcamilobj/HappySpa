'use strict';

/**
 * @ngdoc function
 * @name happySpaApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the happySpaApp
 */
angular.module('happySpaApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = [ 'spaSaveBook', 'spaServicesHttp'];
 function bookCtrl(spaSaveBook,spaServicesHttp) {
   var vm = this;
   vm.form = {};
   vm.submitBook = submitBook;
   vm.loadSpaServicesHttp = loadSpaServicesHttp;
   vm.$onInit = onInit;

   function onInit(){
     console.log("Book");
     loadSpaServicesHttp();
   }

   function submitBook(){
     console.log('formulario: ', vm.form)
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

   function loadSpaServicesHttp(){
    spaServicesHttp.getAll()
    .then(function(result){
      vm.serviceList = result.data;
    })
    .catch(function(error){
      console.log(error);
    });
  }
  };
