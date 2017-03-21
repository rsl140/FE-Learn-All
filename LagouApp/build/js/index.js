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

angular.module('app').controller('mainCtrl', ['$scope', function($scope) {
    $scope.list = [{
    	id: '1',
        name: '销售',
        imgSrc: 'image/company-3.png',
        companyName: '千度',
        city: '上海',
        industry: '互联网',
        time: '2016-06-01 11:06'
    },{
    	id: '2',
        name: 'web前端',
        imgSrc: 'image/company-1.png',
        companyName: '慕课网',
        city: '北京',
        industry: '互联网',
        time: '2016-06-01 01:06'
    }];
}]);

'use strict';

angular.module('app').directive('appFoot', [function(){
	return{
		restrict: 'A',
		replace: true,
		templateUrl:'view/template/foot.html'
	}
}]);
'use strict';

angular.module('app').directive('appHead', [function(){
	return {
		restrict: 'A',
		replace: true,//替换
		templateUrl: 'view/template/head.html'//模板位置
	};
}]);
'use strict';

angular.module('app').directive('appPositionList', [function() {
    return {
        restrict: 'A',
        replace: true,
        templateUrl: 'view/template/positionlist.html',
        scope: {
        	data: '='
        }
    };
}]);
