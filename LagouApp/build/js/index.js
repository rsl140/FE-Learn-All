'use strict';

angular.module('app', ['ui.router']);

'use strict';

angular.module('app').config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider.state('main',{
		url: '/main',
		templateUrl: 'view/main.html',
		controller: 'mainCtrl'
	});
	$urlRouterProvider.otherwise('main');
}]);
'use strict';

angular.module('app').controller('mainCtrl', ['$scope', function($scope){

}]);
'use strict';

angular.module('app').directive('appHead', [function(){
	return {
		restrict: 'A',
		replace: true,//替换
		templateUrl: 'view/template/head.html'//模板位置
	};
}]);