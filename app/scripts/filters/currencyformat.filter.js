'use strict';

/**
 * @ngdoc filter
 * @name happySpaApp.filter:currencyFormat.filter
 * @function
 * @description
 * # currencyFormat.filter
 * Filter in the happySpaApp.
 */
angular.module('happySpaApp').filter('currencyFormat',  currencyFormatFilter)
  function currencyFormatFilter() {
    return function (value) {
      return value.toLocaleString();
    };
  };
