$(function() {
	
	$(".sub, .sub_cover").hide();
	
	$(".header_menu, .sub_cover").mouseover(function() {
		$(".sub, .sub_cover").stop().slideDown();
	});
	$(".header_menu, .sub_cover").mouseout(function() {
		$(".sub, .sub_cover").stop().slideUp();
	});
	

	// popup
	$(".popup_menu").hide().animate({left:'-100%'});
	
	$(".burger_icon>.fas").click(function(){
		$(".popup_menu").show();
		$(".popup_menu").animate({left:'0'});
	});
	
	$(".close_btn").click(function(){
		$(".popup_menu").animate({left:'-100%'});
	});
	

	//popup내 서브메뉴 효과
	$('.pop_sub').hide();

	$('.pop_main>li').mouseover(function(){
		$('.pop_sub',this).stop().slideDown();
	});
	$('.pop_main>li,.pop_sub').mouseout(function(){
		$('.pop_sub',this).stop().slideUp();
	});


});