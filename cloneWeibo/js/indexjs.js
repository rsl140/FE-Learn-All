$(document).ready(function(){
	$(".search_weibo img").mouseover(function(){
		$(".search_weibo img").attr("src","img/searchfocus.svg")
	});
	$(".search_weibo img").mouseout(function(){
		$(".search_weibo img").attr("src","img/search.svg")
	})
})