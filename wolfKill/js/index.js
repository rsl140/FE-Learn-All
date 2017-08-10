$(function(){
	var contrntHeight=window.innerHeight-90;
	$("#left-card").css('height',contrntHeight+"px");
	$("#left-card ul li").css('height',contrntHeight/6+"px");
	$("#right-card ul li").css('height',contrntHeight/6+"px");
	$("#chat-display").css('height',contrntHeight/1.4+"px");
	$("#chat-input").css('height',contrntHeight-(contrntHeight/1.4)+"px");
})