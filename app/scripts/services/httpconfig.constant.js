'use strict';

/**
 * @ngdoc service
 * @name happySpaApp.httpConfig.constant
 * @description
 * # httpConfig.constant
 * Constant in the happySpaApp.
 */
angular.module('happySpaApp')
  .constant('httpConfig', {
    url: 'http://localhost:3000/',
    services: {
      all: 'services/'
    }
  });
