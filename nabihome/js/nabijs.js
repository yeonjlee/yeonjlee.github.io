// 어바웃미 페이지 스킬세트 막대
$(document).ready(function(){
	skillAni();
	function skillAni(){
		$(".skill").each(function(){
			var t=$(this);
			var o=t.find(".percentage").text();
			//console.log("text="+o);
			t.find(".inner-bar").css('width','0%');
			t.find(".inner-bar").animate({width:o},1200);
		});
	}

	//페이지 스크롤
 
	$(window).on("scroll", skillEvent);
		function skillEvent(){		
			var scTop = $(window).scrollTop();
			var skillTop = $('#about').offset().top;			
			if( scTop >= skillTop ){			
				skillAni();
			}
	    }
	$('#about').on('click',skillEvent );
	 
//메인사진 돌리기
    var currentIdx=1;
        
	setInterval(fnImagMove,5000);
	
	$('#main').on('click',fnImagMove);
	function fnImagMove()
	{   
		console.log( "background-image move");            
		//$('#main').eq(currentIdx).animate({'background-position':'-1000px 0px'}, 2000);
		// $('#main').eq(currentIdx).animate({marginLeft:'0px'}, 2000);
		// $('#main').eq(currentIdx).css('background-image','url(images/img'+currentIdx+'.jpg)');                
		$('#main').css({'background-position':'-2000px 0px'});                
		currentIdx++;
		if(currentIdx>3){
			currentIdx=1;
			}
		$('#main').css('background-image','url(image/img'+currentIdx+'.jpg)'); 
		$('#main').css({'background-position':'0px 0px'});
		// $('#main').delay(3000).css({'background-position':'0px 0px'});
		// $('#main').delay(3000).css({'background-position':'-2000px 0px'});
	}
	
	//페이지 선택
    $('#all').on('click',function(){
		$('#Portfolio>div').css('display','inline-block');
		$('#work').css({'height':'2070px'});
		$('#creative').css({'top':'1075px'});           
		$('#creative').css({'left':'1180px'});   
		$('#tour').css({'padding-left':'25px'});           
		$('#menu').css({'padding-left':'0px'});  
		
	});
	$('#webp').on('click',function(){
		$('#Portfolio>div').css('display','inline-block');
		$('#goda,#tour,#menu, #marry, #name, #banner,#logo,#ham, #cos').css('display','none');
		$('#creative').css({'top':'750px'});           
		$('#creative').css({'left':'800px'});           
		$('#work').css({'height':'1010px'});           
	});
	$('#webd').on('click',function(){
			$('#Portfolio>div').css('display','inline-block');
		$('#tour,#menu, #marry, #name, #banner,#logo,#ham, #cos').css('display','none');
		$('#creative').css({'top':'750px'});           
		$('#creative').css({'left':'1200px'});           
		$('#work').css({'height':'1010px'});           
	});
	$('#ed').on('click',function(){
			$('#Portfolio>div').css('display','inline-block');
		$('#samwoo,#wink, #blog, #lovat, #goda,#empty').css('display','none');
		$('#creative').css({'top':'1100px'});           
		$('#creative').css({'left':'1200px'});           
		$('#work').css({'height':'1393px'});           
		$('#tour').css({'padding-left':'0px'});           
		$('#menu').css({'padding-left':'25px'});           
	});

	// 모달팝업
	$('.pop01 .close01').click (function(){
		$('.modal01').fadeOut();
	});
		
	$('#img01').click (function(){
		$('.modal01').fadeIn();
	});

	$('.pop02 .close02').click (function(){
		$('.modal02').fadeOut();
	});
		
	$('#img02').click (function(){
		$('.modal02').fadeIn();
	});
	$('.pop03 .close03').click (function(){
		$('.modal03').fadeOut();
	});
		
	$('#img03').click (function(){
		$('.modal03').fadeIn();
	});

	$('.pop04 .close04').click (function(){
		$('.modal04').fadeOut();
	});
		
	$('#img04').click (function(){
		$('.modal04').fadeIn();
	});

   $('.pop04 .close04').click (function(){
		$('.modal04').fadeOut();
	});
		
	$('#img04').click (function(){
		$('.modal04').fadeIn();
	});

	$('.pop05 .close05').click (function(){
		$('.modal05').fadeOut();
	});
		
	$('#img05, #mo05').click (function(){
		$('.modal05').fadeIn();
	});

	$('.pop06 .close06').click (function(){
		$('.modal06').fadeOut();
	});
		
	$('#img06, #mo06').click (function(){
		$('.modal06').fadeIn();
	});
	

	$('.pop07 .close07').click (function(){
		$('.modal07').fadeOut();
	});
		
	$('#img07, #mo07').click (function(){
		$('.modal07').fadeIn();
	});

	$('.pop08 .close08').click (function(){
		$('.modal08').fadeOut();
	});
		
	$('#img08, #mo08').click (function(){
		$('.modal08').fadeIn();
	});

	$('.pop09 .close09').click (function(){
		$('.modal09').fadeOut();
	});
		
	$('#img09 , #mo09').click (function(){
		$('.modal09').fadeIn();
	});

	$('.pop10 .close10').click (function(){
		$('.modal10').fadeOut();
	});
		
	$('#img10,  #mo10').click (function(){
		$('.modal10').fadeIn();
	});

	$('.pop11 .close11').click (function(){
		$('.modal11').fadeOut();
	});
		
	$('#img11, #mo11').click (function(){
		$('.modal11').fadeIn();
	});

	$('.pop12 .close12').click (function(){
		$('.modal12').fadeOut();
	});
		
	$('#img12, #mo12').click (function(){
		$('.modal12').fadeIn();
	});

	$('.pop13 .close13').click (function(){
		$('.modal13').fadeOut();
	});
		
	$('#img13, #mo13').click (function(){
		$('.modal13').fadeIn();
	});
	

	//선택 페이지 li태그 색깔 바꾸기
	$('#workmenu>ul>li').on('click', function(){    
		$('#workmenu>ul>li').css('font-weight','lighter')
		// e.preventDefault();
		var idx=$(this).index();
		console.log("click=>"+idx );  
		// currentIdx=idx;
		$('#workmenu>ul>li').css('color','#fff');
		var liTag = $('#workmenu>ul>li').eq(idx);
		liTag.css('color',' #5ea273');
		liTag.css('font-weight','bolder');
	}); 

	
});    
    





