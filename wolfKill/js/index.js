$(function(){
	var contrntHeight=window.innerHeight-90;
	$("#left-card").css('height',contrntHeight+"px");
	$("#left-card ul li").css('height',contrntHeight/6+"px");
	$("#right-card ul li").css('height',contrntHeight/6+"px");
	$("#chat-display").css('height',contrntHeight+"px");

	$(".li-card").addClass('animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass('animated flipInY');
    });

	$(".li-card").click(function(){
		clickChangeimg($(this),'bc');
	})
	/*绘制计时器*/
})
/*卡牌背景图片修改*/
function clickChangeimg(obj,str){
	if(obj.hasClass(str)){
		obj.removeClass().addClass('li-card animated flipInY').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      	obj.removeClass('animated flipInY');
    	});
	}else{
		obj.addClass('animated flipInY '+str).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      	obj.removeClass('animated flipInY');
    	});
	}
}

