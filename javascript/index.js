const ALT_COLOUR_SCROLL_POS = 24;

jQuery(document).ready(function($) {
    var initialScrollPos = $(".content-wrapper").scrollTop()
    if (initialScrollPos > ALT_COLOUR_SCROLL_POS) $(".x-navbar").addClass("alt-color");

    $(".content-wrapper").scroll(function() {
      var scrollPos = $(".content-wrapper").scrollTop(),
          navbar = $('.x-navbar');
  
      if (scrollPos > ALT_COLOUR_SCROLL_POS) {
          navbar.addClass('alt-color');
      } else {
          navbar.removeClass('alt-color');
      }
    });

    $(".navbar-toggler").click(function(){
        var scrollPos = $(".content-wrapper").scrollTop()
        if (scrollPos <= ALT_COLOUR_SCROLL_POS) $(".x-navbar").toggleClass("alt-color");
        $(".x-navbar").toggleClass("expanded");
    })
});

function showYoutube(){
    $("#youtubeview").addClass("overlay-visible")
}

function hideYoutube(){
    $("#youtubeview").removeClass("overlay-visible")
}

function showLinks(){
    $("#linkview").addClass("overlay-visible")
}

function hideLinks(){
    $("#linkview").removeClass("overlay-visible")
}