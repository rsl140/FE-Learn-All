'use strict';

angular.module('app').directive('appHeadBar', [function() {
    return {
        restrict: 'A',
        replace: true, //替换
        templateUrl: 'view/template/headBar.html', //模板位置
        scope: {
            text: '@'
        },
        link: function(scope) {
            scope.back = function() {
                window.history.back();
            };
        }
    };
}]);
