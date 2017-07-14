$(document).ready(function(){
	var musicContent = null;
	var start = 0;
	function musicSearch(){
		var keyworld = $("#keyworlds").val();
		if(keyworld){
			$(".spinner").show();
			$.ajax({
			type:"get",
			async:true,
			url:"https://api.douban.com/v2/music/search?q="+keyworld+"&start="+start+"&count=10",
			dataType:"jsonp",
			jsonp:"callback",
			jsonpCallback:"ms",
			success:function(json){
				//alert(json.musics);
				$(".spinner").hide();
				$("#display").children().remove();
				$(".pagination").children().remove();
				$(".totle").html("共有"+json.total+"条数据，当前第"+(start+1)+"页");
				displayMusic(json.musics);
				pagecount(json.total,start);
				$(".page").show();
				},
			error:function(){
				alert("查询失败");
			}
			})
		}
		else{
			alert("请输入查询内容！");
		}
	};
	//点击查询
	$("#toSearch").click(function(){
		start = 0;
		musicSearch();
	});
	//输入框绑定回车事件ß
	$("#keyworlds").keypress(function(event){
		if(event.keyCode == "13"){
			start = 0;
			musicSearch();
		}
	});
	//焦点获取
	$("#keyworlds").focus();
	//音乐查询结果
	function displayMusic(music){
		for(var i=0;i<10;i++){
			var imgshow = "<div class='img'><img src="+music[i].image+"></div>";
			var title = "<div><a href="+music[i].alt+" title="+music[i].title+" alt="+music[i].alt_title+">"+music[i].title+"</a></div>";
			var ratings = "<div>豆瓣评分:"+music[i].rating.average+"</div>";
			var authors = "<div>"+music[i].attrs.singer+"</div>";
			var content = "<div class='content'>"+title+ratings+authors+"</div>";
			$("<div class='table clearfix'>"+imgshow+content+"</div>").appendTo("#display");
		}
	}

	//分页判断
	function pagecount(pagetotle,curretpage){
		var count=Math.ceil(pagetotle/10);
		curretpage+=1;
		var pages="";
		//分页显示页码判定
		if(curretpage<4){
			for(var i=1;i<7;i++){
				pages+="<li><a href='#'>"+i+"</a></li>";
			}
			
		}
		else if(curretpage>(count-4)){
			for(var i=(count-4);i<count;i++){
				pages+="<li><a href='#'>"+i+"</a></li>";
			}
		}
		else{
			pages="<li><a href='#'>"+(curretpage-3)+"</a></li>"+"<li><a href='#'>"+(curretpage-2)+"</a></li>"+"<li><a href='#'>"+(curretpage-1)+"</a></li>"+"<li><a href='#'>"+curretpage+"</a></li>"+"<li><a href='#'>"+(curretpage+1)+"</a></li>"+"<li><a href='#'>"+(curretpage+2)+"</a></li>";
		}
		$(pages).appendTo(".pagination");
	}
	//分页点击
	$(function(){
		$(".pagination").on("click","li",function(){
			var pagenum = $(this).text();
			start = pagenum - 1;
			musicSearch();
		})
	})
})