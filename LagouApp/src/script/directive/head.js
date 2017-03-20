'use strict';

angular.module('app').directive('appHead', [function(){
	return {
		restrict: 'A',
		replace: true,//替换
		templateUrl: 'view/template/head.html'//模板位置
	};
}]);