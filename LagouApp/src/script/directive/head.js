'use strict';

angular.module('app').directive('appHead', ['cache',function(cache){
	return {
		restrict: 'A',
		replace: true,//替换
		templateUrl: 'view/template/head.html',//模板位置
		link:function($scope){
			$scope.name =cache.get('name') || '';
		}
	};
}]);