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
		$(this).removeClass('animated flipInY').addClass('animated flipInY bc').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      	$(this).removeClass('animated flipInY');
    });
		

	})

})