$(document).ready(function(){
	$('.gallery_tabs_video').click(function(){
		$('.gallery_tabs_video').addClass('gallery_tabs_active');
		$('.gallery_tabs_photo').removeClass('gallery_tabs_active'); 
		$('.gallery_photo').css({'display':'none'}); 
		$('.gallery_video').css({'display':'block'}); 

	});
	$('.gallery_tabs_photo').click(function(){
		$('.gallery_tabs_photo').addClass('gallery_tabs_active');
		$('.gallery_tabs_video').removeClass('gallery_tabs_active'); 
		$('.gallery_video').css({'display':'none'}); 
		$('.gallery_photo').css({'display':'block'});
	});

});