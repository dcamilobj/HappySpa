'use strict';

/**
 * @ngdoc directive
 * @name happySpaApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('happySpaApp').directive('footerSection', footerSection); 
  function footerSection() {
    var directive =  {
      //template: '<div><ng-transclude></ng-transclude></div>',
      templateUrl: './views/partial.footer.html',
      restrict: 'EAC', /*E: invocada en un elemento, C: invocada en una clase (No recomendada), A: Atributo*/
      link: link,
      transclude: true
    };

    return directive;

    function link(scope, element, attrs) {
      scope.team = attrs.author;
      //element.text('this is the footerSection.directive directive');
    }
  
  };

