'use strict';

angular.module('happySpaApp').config(settings);

settings.$inject = ['$stateProvider'];

function settings($stateProvider){

    var homeState = {
        abstract: true,
        name: 'home',
        templateUrl: 'views/home.html'
    }

    var mainState = {
        name: 'home.main',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl as vm'
    }
    
    var aboutState = {
        name: 'home.about',
        url: '/about',
        templateUrl: 'views/about.html'
    }

    
    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(aboutState);
}