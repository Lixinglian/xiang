$(function(){
	var imgs=$('.img-box img')
	var cimg=$('.tanchu img')
	imgs.on('mousedown',false)
	var i=0;
	$(imgs).each(function(i,v){
		$(this).on('click',function(){
			i=$(this).index();
			var pic=$(this).attr('src')
			$(cimg).attr('src',pic)
			$('.content').addClass('dis')

		})
	})
	$('.content').on('click',function(){
		$('.content').removeClass('dis')
	})
	$('.content .close').on('click',function(){
		$('.content').removeClass('dis')
	})
	$('.tanchu').on('click',false)
	$('.right').on('click',function(){
			i++;
			if(i>imgs.length){i=0}
			cimg.attr('src',imgs.eq(i).attr('src'))
	})
	$('.left').on('click',function(){
		imgs.each(function(i,v){
			if($(v).attr('src')==cimg.attr('src')){
				cimg.attr('src',imgs.eq(i-1).attr('src'))			}
		})	
	})
})