(function ($) {


    /* Document Ready State */
    jQuery(document).ready(function(){
        AOS.init(); 
          /*===== Header sticky =====*/
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll <= 50) {
			$('.header-section').removeClass("header-sticky");
		} else {
			$('.header-section').addClass('header-sticky');
		}
	});
	/*===== Header sticky =====*/

    /*===== Testimonial slider =====*/

    $(document).ready(function(){
        $('.center-slider').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          arrows: true,
          dots: false,
          speed: 300,
          centerPadding: '20px',
          infinite: true,
          autoplaySpeed: 5000,
          autoplay: true
        });
      });
      /*===== Testimonial slider =====*/

    });
})(jQuery);