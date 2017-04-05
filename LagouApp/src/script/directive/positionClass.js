'use strict';

angular.module('app').directive('appPositionClass', [function() {
    return {
        restrict: 'A',
        replace: true, //替换
        scope: {
            com: '='
        },
        templateUrl: 'view/template/positionClass.html',
        link: function($scope) {
            $scope.showPositionList = function(idx) {
                $scope.positionList = $scope.com.positionClass[idx].positionList;
                $scope.isActive = idx;
            }
            // $scope.showPositionList(0);
			$scope.$watch('com',function(newVal){
				if(newVal) $scope.showPositionList(0);
			});
        }
    };
}]);
