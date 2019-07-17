'use strict';

angular.module('happySpaApp').config(settings);

settings.$inject = ['$stateProvider'];

function settings($stateProvider){

    var mainState = {
        name: 'main',
        url: '/',
        templateUrl: 'views/main.html'
    }
    
    var aboutState = {
        name: 'about',
        url: '/about',
        templateUrl: 'views/about.html'
    }
}