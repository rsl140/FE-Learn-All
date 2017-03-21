"use strict";angular.module("app",["ui.router"]),angular.module("app").config(["$stateProvider","$urlRouterProvider",function(e,t){e.state("main",{url:"/main",templateUrl:"view/main.html",controller:"mainCtrl"}).state("position",{url:"/position/:id",templateUrl:"view/position.html",controller:"positionCtrl"}),t.otherwise("main")}]),angular.module("app").controller("mainCtrl",["$scope",function(e){e.list=[{id:"1",name:"销售",imgSrc:"image/company-3.png",companyName:"千度",city:"上海",industry:"互联网",time:"2016-06-01 11:06"},{id:"2",name:"web前端",imgSrc:"image/company-1.png",companyName:"慕课网",city:"北京",industry:"互联网",time:"2016-06-01 01:06"}]}]),angular.module("app").controller("positionCtrl",["$scope",function(e){}]),angular.module("app").directive("appCompany",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/company.html"}}]),angular.module("app").directive("appFoot",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/foot.html"}}]),angular.module("app").directive("appHead",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/head.html"}}]),angular.module("app").directive("appHeadBar",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/headBar.html",scope:{text:"@"},link:function(e){e.back=function(){window.history.back()}}}}]),angular.module("app").directive("appPositionInfo",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionInfo.html",scope:{isActive:"="},link:function(e){e.imagePath=e.isActive?"image/star-active.png":"image/star.png"}}}]),angular.module("app").directive("appPositionList",[function(){return{restrict:"A",replace:!0,templateUrl:"view/template/positionlist.html",scope:{data:"="}}}]);