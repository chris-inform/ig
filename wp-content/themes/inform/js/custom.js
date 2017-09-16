$(document).ready(function() {

	$("#toTop").on('click', function (e) {
		e.preventDefault();
	   $("html, body").animate({scrollTop: 0}, 400);
	});

	$("#marketing-accordion-1 .panel").on("show.bs.collapse hide.bs.collapse", function(e) {
	    if (e.type=='show'){
	      $(this).addClass('active');
	    }else{
	      $(this).removeClass('active');
	    }
	  });  

	activeItem = $("#map-accordion .item:first");
  $(activeItem).addClass('active');

  if ($("#gmap_canvas").length > 0){
  	initMap(-33.873704,151.209482);
  }

  $('.phone-wrap ul li').on('click', function() {
  	var phoneContent = $(this).find('.desc').html();
  	$('.phone-wrap ul li').removeClass('active');
  	$(this).addClass('active');
  	$('#phone-content').html(phoneContent);
  });


  $("#map-accordion .item").on('click', function(e){
  	// $('#map-accordion .map iframe').attr('src', $(this).attr('data-mapsrc'));
  	initMap(parseFloat($(this).attr('data-poslat')), parseFloat($(this).attr('data-poslng')));
  		$('.item').removeClass('active');
  		$(this).addClass('active');
      // $(activeItem).animate({width: "5%"}, {duration:300, queue:false});
      $(this).animate({right: "75%"}, {duration:600, queue:false});
      // activeItem = this;
  });


	$("#back_to_top").on('click',function(e) {
	    e.preventDefault();
	    $("html, body").animate({ scrollTop: 0 }, "slow");
	    return false;
	});

	$('.arrow-down').on('click', function(e) {
		e.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	});

	var lastID;

	$('.class-inform-collapse').on('click', function(e) {
		e.preventDefault();
		$('.collapse.in').collapse('hide');
	});

	$(function() {
		$('#testiCarousel').carousel({
			interval: 113000
		});
		var caption = $('div.item:nth-child(1) .carousel-caption');
		$('.carousel-description').html(caption.html());
		caption.css('display','none');
		$("#testiCarousel").on('slide.bs.carousel', function(evt) {
		   var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .carousel-caption');
		   $('.carousel-description').fadeOut(0).fadeIn().html(caption.html());
		   caption.css('display','none');
		});
	});

	$('.page-id-415,.page-id-5954').find('.wpcf7-form select').prop("disabled", true);
	$('.page-id-415,.page-id-5954').find('.wpcf7-form select').val("Media");

	$('.works-wrapper a').on('click', function(e) {
		e.preventDefault();
		var details = $(this).parents().eq(2).prev('.details');
		var largeImg = details.find('.main-img img').attr('src');
		var logo = details.find('.logo').html();
		var title = details.find('.title').html();
		var desc = details.find('.desc').html();
		$('#workModal').find('.work-modal .left').css({
			'background-image': 'url('+largeImg+')',
			'background-size' : 'cover',
			'background-position': 'center',
			'background-repeat' : 'no-repeat'
		});
		// $('#workModal').find('.work-modal .left').html(largeImg);
		$('#workModal').find('.work-modal .right .logo').html(logo);
		$('#workModal').find('.work-modal .right .title').html(title);
		$('#workModal').find('.work-modal .right .desc').html(desc);
		$('#workModal').modal('show');
	});

	

	var isMobile = false; //initiate as false
	// device detection
	if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

	if(isMobile) {

		$('body').addClass('mobile');

		$('.menu-item-has-children > a').on('click', function(e) {
			e.preventDefault();
			$(this).next('.sub-menu').slideToggle(200);
		});

		$('.intro .box-inner').find('a').on('click', function(e) {
			e.preventDefault();
			$('html, body').animate({
					scrollTop: $( $.attr(this, 'data-custid') ).offset().top-61
	    }, 400);
		});
		  
	} else {

			$('body').removeClass('mobile');


			$('#fullpage,.services-fullpage').fullpage({
				scrollOverflow: true,
				slideSelector: '.slidefull',
				onLeave: function(index, nextIndex, direction) {
					if(index == 1 && nextIndex == 2) {
						$('#section-four .center').addClass('animated slideInLeft').css({
							'animation-delay': '.5s',
							'animation-duration' : '.51s'
						});
						$('#section-four .inner').addClass('animated fadeInUp').css({
							'animation-delay': '.8s',
							'animation-duration' : '.71s'
						});
						$('#section-four .left').addClass('animated slideInLeft').css({
							'animation-delay': '.8s',
							'animation-duration' : '.71s'
						});
					}
					else if( (index == 1 || index == 2) && nextIndex == 3) {
						$('#section-three .left').addClass('animated slideInLeft').css({
							'animation-delay': '.5s',
							'animation-duration' : '.31s'
						});
						$('#section-three .inner').addClass('animated slideInUp').css({
							'animation-delay': '.8s',
							'animation-duration' : '.71s'
						});
						$('#section-three .right').addClass('animated fadeInDown').css({
							'animation-delay': '.8s',
							'animation-duration' : '.71s'
						});
					}
					else if( (index == 1 || index == 2 || index == 3 ) && nextIndex == 4) {
						$('#section-two .left').addClass('animated slideInLeft').css({
							'animation-delay': '.5s',
							'animation-duration' : '.31s'
						});
						$('#section-two .right').addClass('animated slideInRight').css({
							'animation-delay': '.5s',
							'animation-duration' : '.31s'
						});
						$('#section-two .inner').addClass('animated slideInUp').css({
							'animation-delay': '.7s',
							'animation-duration' : '.31s'
						});
					}
					else if( (index == 1 || index == 2 || index == 3 || index == 4 ) && nextIndex == 5) {
						$('#section-five .item').addClass('animated zoomIn').css({
							'animation-delay': '.5s',
							'animation-duration' : '.51s'
						});
						$('#section-six .sec-title .inner').addClass('animated bounceIn').css({
							'animation-delay': '1s'
						});
					}
					else if( (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 ) && nextIndex == 6) {
						$('#section-seven .address-overlay').addClass('animated slideInRight').css({
							'animation-delay': '.5s',
							'animation-duration' : '.51s'
						});
						$('#section-seven .address-inner').addClass('animated fadeInRight').css({
							'animation-delay': '.6s',
							'animation-duration' : '.51s'
						});
					}
					else if( (index == 1 || index == 2 || index == 3 || index == 4 || index == 5 || index == 6 ) && nextIndex == 7) {
						$('#section-eight .blue-bar').addClass('animated slideInLeft').css({
							'animation-delay': '.5s',
							'animation-duration' : '.51s'
						});
						$('#section-eight .blue-bar .inner').addClass('animated fadeInLeft').css({
							'animation-delay': '.6s',
							'animation-duration' : '.51s'
						});
					}
				}

			});

			$('.first-menu .menu-item-has-children > a').mouseover(function() {
				// e.preventDefault();
				var primaryMenu = $(this).parents().eq(4);
				var secondaryMenu = $(this).parents().eq(4).next();
				var subMenu = $(this).next().clone();
				var currentID = $(this).attr('href');

				$(primaryMenu).addClass('double').removeClass('single');
				$(secondaryMenu).addClass('double');
				$(secondaryMenu).find('.menu-site-menu-container').html(subMenu);

			});

			$('.first-menu .menu-item:not(.menu-item-has-children) > a').mouseover(function() {
					$('.second-menu').removeClass('double');
					$('.first-menu').removeClass('double').addClass('single');
			});
	}



	function initMap(poslat, poslng) {
	  var map = new google.maps.Map(document.getElementById('gmap_canvas'), {
	    center: {lat: poslat, lng: poslng},
	    scrollwheel: false,
	    zoom: 18
	  });
	  var marker = new google.maps.Marker({
	    position: {lat: poslat, lng: poslng},
	    map: map
	  });
	}

});



/* Open */
function openNav() {
    document.getElementById("main-nav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("main-nav").style.height = "0%";
}