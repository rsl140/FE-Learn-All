'use strict';

angular.module('app').directive('appPositionList', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionlist.html',
        scope: {
        	data: '=',
        	filterObj: '='
        }
    };
}]);
