$( document ).ready(function() {
  //    main-nav

  $('.header__mobile-nav-icon').click(function(){
    $(this).toggleClass('is-active');
    $('html, body').toggleClass('html-overflow');
    $('.mobile-nav__inner').slideToggle();
  });

  // hero android fix vp height
  var viewportHeight = $(window).height()-70;
  $('.hero').not('.hero-alt').height(viewportHeight);

  if($('.subNav').length) {
      //    sub navigation 
      var subNav = function(){

        $('.subNav__menu').click(function(){
          
        if ($(this).hasClass('is-open')){
          //    undo all the sets
          $('.subNav__inner').slideUp();
          $('.subNav__menu').removeClass('is-open');
          $('body').unbind('touchmove')
          $('html').removeClass('html-overflow');

          }else{
    
           //   animate to subnav id
            var animateToHash = '#subnav';    
            $('html, body').animate({
            scrollTop: $(animateToHash).offset().top+10
            }, 150);
            
            
            $('html').toggleClass('html-overflow');
            
            $(this).toggleClass('is-open');
            $('.subNav__inner').slideToggle();
            
            $('body').bind('touchmove', function(e){e.preventDefault()})
            
          }

            $('.subNav__inner a').click(function(){
              //    undo all the sets
              $('.subNav__inner').slideUp();
              $('.subNav__menu').removeClass('is-open');
              $('body').unbind('touchmove')
              $('html').removeClass('html-overflow');
            });
      
        });
      };
      subNav();


      //    sticky nav function
        var stickyNavTop = $('.subNav').offset().top;
        var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        
        
        
        if (scrollTop > stickyNavTop) { 
            $('.subNav').addClass('sticky');
        } else {
            $('.subNav').removeClass('sticky'); 
        }
      };
      stickyNav();
      //    check subnav exists, then fire sticky function

      $(window).scroll(function() {
          stickyNav();
      });
      
    // needs cleanup and review
    
      var hashTagActive = "";
        $(".subNav__desktop a, .subNav__inner a").click(function (event) {
            if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
                event.preventDefault();
                //calculate destination place
                var dest = 0;
                
                if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                    dest = $(document).height() - $(window).height();
                } else {
                    dest = $(this.hash).offset().top;
                }
                //go to destination
                $('html,body').animate({
                    scrollTop: dest -50
                }, 1000, 'swing');
                hashTagActive = this.hash;
            }
      });
      
  }  
  //    accordion function

  var accordion = function(){
      $('.accordion__icon').click(function(){

          if($(this).parents('.accordion__item').find('.accordion__body').is(':visible')){

          }else{
              $(this).parents('.accordion__item-outer').find('.accordion__body').slideToggle(300);
              $(this).toggleClass('is-open');
              $(this).parents('.accordion__item-outer').toggleClass('is-active');

              //  scroll to item title

              //  set value to scroll to
          var animateToHash = $(this).parents('.accordion__item-outer').attr('id');
                
            setTimeout( function() {
                $('html, body').animate({
                scrollTop: $('#' + animateToHash).offset().top-100
                }, 150);

            }, 301 );

          };
          
          $notThis = $(".accordion__icon").not(this).parents('.accordion__item-outer').find('.accordion__body');
          $notThisActive = $(".accordion__icon").not(this).parents('.accordion__item-outer');
          
          if($notThis.is(":visible")){
              $notThis.slideUp(300);
          };
          
          if($notThisActive.hasClass("is-active")){
              $notThisActive.removeClass("is-active");
          };

      });
  };
  accordion();

//form validation

	//	Real-time Validation
		$('.input-required').on('input', function() {
			var input=$(this);
			var errorMsg = $(this).closest('.form-input').find('.error').addClass('is-active');
			
			var is_name=input.val();
			if(is_name){errorMsg.removeClass("is-active").addClass("valid");}
			else{errorMsg.removeClass("valid").addClass("is-active");}
		});

  //  prevent submit and show required required fields on submit

  $("#form-block__submit").click(function(event) {
    
    var test = $(".input-required").val();
    var requiredItems = $('.input-required').closest('.form-input').find('.error');
    
    if(test==''){
      
      event.preventDefault();
      
      requiredItems.addClass('is-active');
/*
        $(".input-required").each(function)() {
          var checkVal = $(this).val();
          
          if(checkVal==''){
            $('this').closest('.form-input').find('.error').addClass('is-active');
          }
        })
*/
     }

  });
  
//    auto grow textarea
    autosize(document.querySelectorAll('textarea'));

});

