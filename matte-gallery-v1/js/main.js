function navDropdown() {
	$('.nav-button').on('click',function(){
		$(this).parent().find('.sub-nav').slideToggle('fast')
	})
}

function mobileNav() {
	$('#mnav-trigger').on('click', function(){
		$('.inner-wrap').toggle()
	})
}

function lightboxInit() {
  // global variables for script
  var current, size
  var lightboxTrigger = $('.gallery-link'),
      lightboxCount = $('.gallery-link').length
  
  $(lightboxTrigger).click(function(e) {

    e.preventDefault()
    
    var image_href = $(this).attr("href"),  
		slideNum = $(lightboxTrigger).index(this)

    if ($('#lightbox').length > 0) {        
      $('#lightbox').show()
    } else {                                
      var lightbox =
          '<div id="lightbox">' +
          '<div id="slideshow">' +
          '<ul></ul>' +        
          '</div>' +
          '</div>'

      $('body').append(lightbox);
      
      $('.gallery').find(lightboxTrigger).each(function() {
        var img_href = $(this).attr('href'),
            img_title = $(this).attr('data-title'),
            img_caption = $(this).attr('data-caption'),
            img_date = $(this).attr('data-date'),
            img_count = $('#slideshow li').length + 1

        $('#slideshow ul').append(
          '<li>' +
          '<div class="slide-meta">' +
          '<div class="slide-title text-3">' + img_title + '</div>' +
          '<div class="slide-caption text-1">' + img_caption + '</div>' +
          '<div class="slide-date text-0">' + img_date + '</div>' +
          '</div>' +
          '<div class="img-wrap">' +
          '<img class="slide-nav" src="' + img_href + '">' +
          '<div class="social-wrap">' +
          '<span><a class="share facebook" href="https://www.facebook.com/sharer/sharer.php?u=' + window.location.href + '" target="_blank"></a></span>' +
          '<span><a class="share twitter" href="https://twitter.com/home?status=' + window.location.href + '" target="_blank"></a></span>' +
          '<span><a class="share pinterest" href="https://www.pinterest.com/pin/create/button/?media=' + img_href + '&url=' + window.location.href + '&description=' + img_title + ',%20by%20MATTE" target="_blank"></a></span>' +
          '<span><a class="share tumblr" href="" target="_blank"></a></span>' +
          '</div>' +
          '<div class="nav-wrap">' +
          '<span class="text-0">' + img_count + ' of ' + lightboxCount + '</span>' +
          '<button id="prev" class="prev slide-nav"></button>' +
          '<button id="next" class="next slide-nav"></button>' +
          '</div>' +
          '</div>' +
          '</li>'
        )
      })    
    }

    size = $('#slideshow ul > li').length

    $('#slideshow ul > li').hide()
    $('#slideshow ul > li:eq(' + slideNum + ')').show()

    current = slideNum
  });
  
  $('body').on('click', '#lightbox', function(e) { 
      $('#lightbox').hide()
  })

  $('body').on('click', '.share', function(e) {
    e.stopPropagation()
  })

  $('body').on('keydown', function(e){

      if ((e.keyCode || e.which) == 27) {
          $('#lightbox').hide()
      }

    })
  
  $('body').on('click', '.slide-nav', function(e) {
    e.preventDefault()
    e.stopPropagation()
    
    var $this = $(this)
    var dest;

    if ($this.hasClass('prev')) {
      dest = current - 1
      if (dest < 0) {
        dest = size - 1
      }
    } else {
      dest = current + 1
      if (dest > size - 1) {
        dest = 0
      }
    }
    
    $('#slideshow ul > li:eq(' + current + ')').hide()
    $('#slideshow ul > li:eq(' + dest + ')').show()

    current = dest
  });

  $('body').on('keydown', function(e){
    var dest
    
    if ((e.keyCode || e.which ) == 37) {
      dest = current - 1
      if (dest < 0) {
        dest = size - 1
      }
      $('#slideshow ul > li:eq(' + current + ')').hide()
      $('#slideshow ul > li:eq(' + dest + ')').show()
      current = dest
    } else if ((e.keyCode || e.which ) == 39) {
      dest = current + 1
      if (dest > size - 1) {
        dest = 0
      }
      $('#slideshow ul > li:eq(' + current + ')').hide()
      $('#slideshow ul > li:eq(' + dest + ')').show()
      current = dest
    } 

  })

}

function iframeResponsive() {
    function setAspectRatio() {
      $('iframe').each(function() {
        $(this).css('height',$(this).width()*9/16)
      })
    }

    setAspectRatio()   
    $(window).resize(setAspectRatio)
}

function masonryInit() { 

/** First Instance **/
/*var $container = $('.masonry');
    $container.imagesLoaded(function(){
      $container.masonry({
        columnWidth: '.grid-sizer',
        itemSelector : '.grid-item'
      });
    });*/

/** Second Instance **/
/*var $container1 = $('.gallery');
    $container1.imagesLoaded(function(){
      $container1.masonry({
        columnWidth: '.gallery-sizer',
        itemSelector : '.gallery-item'
      });
    });*/

  if ( $('body').hasClass('home') ) {

    var $grid;

    function triggerMasonry() {
      if ( !$grid ) {
        return;
      }

      $grid.masonry({
        colummWidth: '.grid-sizer',
        itemSelector: '.grid-item'
      });
    }

    $grid = $('.masonry') 

    $grid.imagesLoaded(function (){ 
      $grid = $('.masonry');
      triggerMasonry();
    })

  } else {
    
    var $gallery;

    function triggerGalleryMasonry() {
      if ( !$gallery ) {
        return;
      }

      $gallery.masonry({
        colummWidth: '.gallery-sizer',
        itemSelector: '.gallery-item'
      });
    }

    $gallery = $('.gallery') 

    $gallery.imagesLoaded(function (){ 
      $gallery = $('.gallery');
      triggerGalleryMasonry();
    })

  }

    /*var $grid1;

    function triggerGalleryMasonry() {
      if ( !$grid1 ) {
        return;
      }

      $grid1.masonry({
        colummWidth: '.gallery-sizer',
        itemSelector: '.gallery-item'
      });
    }

    $grid1 = $('.gallery') 

    $grid1.imagesLoaded(function (){ 
      $grid = $('.gallery');
      triggerGalleryMasonry();
    })*/


}
  
  /*if ( $('body').hasClass('home') ) {
    console.log('home masonry running')
    $('.masonry').masonry({
        colummWidth: '.grid-sizer',
        itemSelector: '.grid-item'
    });
  } else {
    console.log('gallery masonry running')
    var $grid;

    function triggerMasonry() {
      if ( !$grid ) {
        return;
      }

      $grid.masonry({
        colummWidth: '.gallery-sizer',
        itemSelector: '.gallery-item'
      });
    }

    $grid = $('.gallery') 

    $grid.imagesLoaded(function (){ 
      $grid = $('.gallery');
      triggerMasonry();
    })*/

  /*

  if ( $('body').hasClass('home') ) {
    console.log('home masonry running')
    $('.masonry').masonry({
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item'
    })
  } else {
    console.log('gallery masonry running')
    $('.gallery').masonry({
      columnWidth: '.gallery-sizer',
      itemSelector: '.gallery-item'
    })
  }

  */

function galleryLogin() {
  $('#client-login').on('click', function(){
    $('.login-wrapper').show()
    $('body').addClass('no-scroll')

    $('body').on('click', '.login-wrapper', function(e) { 
      $('.login-wrapper').hide()
    })

    $('body').on('click', '.gallery-thick-border, .gallery-thick-border *', function(e) {
      e.stopPropagation()
    })

    $('body').on('keydown', function(e){
      if ((e.keyCode || e.which) == 27) {
          $('.login-wrapper').hide()
      }         
    })

  })
}

$(function(){

	mobileNav()

	navDropdown()

	window.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check; }
    
    if(!window.mobilecheck()){
    	lightboxInit()    
    } else {
    	    	$('.gallery-item a').on('click', function(e){
    		e.preventDefault()
    	})  
    }

  masonryInit()

	iframeResponsive()

  galleryLogin()

})