'use strict';

angular.module('app').value('dict',{}).run(['dict','$http',function(dict,$http){
	$http.get('data/city.json').then(function(resp){
		dict.city = resp.data;
	});
	$http.get('data/salary.json').then(function(resp){
		dict.salary = resp.data;
	});
	$http.get('data/scale.json').then(function(resp){
		dict.scale = resp.data;
	});
}]);