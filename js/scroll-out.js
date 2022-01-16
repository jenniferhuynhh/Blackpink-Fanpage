if( $(window).width() > 800){
	var cntWd, sldWd, tb;
	$(function() {
		
		cntWd = $('.albums').innerWidth();
		tb = $('.album-slider');
		sldWd = tb.outerWidth();
		
		$('.albums').mousemove(function(e)
		{
			tb.css({left: ((cntWd - sldWd)*((e.pageX / cntWd).toFixed(3))).toFixed(1) +"px" });
 		});
	});

}

