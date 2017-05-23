$(document).ready(function(){
	//alert($(document).width());

		$(document).on('click', 'a', function(event)

				{
		    
				    if($(this).hasClass("jump"))
				    {
				      	event.preventDefault();
				    	$('html, body').animate({scrollTop: $( $.attr(this, 'href') ).offset().top-100}, 500);
				  	}
				  	else
				  	{
				  		event.preventDefault();

				  		var url = $(this).attr('href');
				  		alert(url);
				  		$('.ajax').load('file:///C:/xampp/htdocs/Whitedove/'+url);
				  	}

				    
				}
		);
	$(document).on('scroll',function(){
		if($(document).scrollTop()>=30)
		{
			
			$('.header').css('background','#f9fafc');
			$('.header').css('color','#121d33');
			$('.header').css('position','fixed');
			$('.header').css('top',0);
			$('.piece img').fadeIn('slow');
		}
		else
		{
			$('.header').css('background','transparent');
			$('.header').css('color','white');
			$('.header').css('position','relative');
			}
	});

		$('.three .classes div').on('click',function(){

				$('.three .classes div').removeClass('glow');
				$(this).addClass('glow');
		});
		$('.seven .head li').on('click',function(){
			$('.seven .head li').removeClass('active');
			$(this).addClass('active');
			var innerVal = $(this).text();
		
			$('.seven .container div:not(.content)').fadeOut('fast');
			$('.'+innerVal+', .'+innerVal+' .content div').fadeIn('slow');

		});
		if($('.drop-icon').show()){

		$('.dropicon').on('click',function(){

				$('.drop').show();
		});
	}
	else
	{
		$('.drop').hide();
	}

	$('.eight ul li ').on('mouseenter',function(){
		$(this).children('.overlay').fadeIn('fast');
	});
	$('.eight ul li ').on('mouseleave',function(){
		$(this).children('.overlay').hide().animate();
	});
	/*$('.dropdown').on('click',function(){

		$(this).addClass('dop');
		$('.dop .dropdown-content').show();
		if($(this).hasClass('dop'))
		{
			$('.dropdown img').on('click',function(){

				
				$('.dop .dropdown-content').hide();
		
	});	
		}
		
	});	*/
});
