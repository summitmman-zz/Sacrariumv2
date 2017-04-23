var p = 0;
var pagemenu = 0;
function timeout_trigger() {
    $(".progress-view").text(p+"%");
    console.log(p);
    if(p <= 100) {
        setTimeout('timeout_trigger()', 60);
    }
    p+=2;
}

$(window).on('scroll', function () {
  
    var scrollTop = $(this).scrollTop();

    $('.section').each(function() {
        var target = $(this).offset().top;
		console.log(target, scrollTop);
        var id = $(this).attr('id');
		console.log(id);
        var offsetHeight = 20;

        if(pagemenu.length > 0) {
            offsetHeight = 44 + 20;
        }

        // if (scrollTop + 50 >= target) {
        if (scrollTop + offsetHeight >= target) {
            $('#menu > ul > li > a').removeClass('menu-active');
            $('#menu > ul > li > a[href="#' + id + '"]').addClass('menu-active');
        }
    });

    if(window.innerWidth >= 991 && pagemenu.length > 0) {
        if(window.scrollY > 107.2) {
            if(!pagemenu.hasClass('page-menu-sticky')) {
                pagemenu.addClass('page-menu-sticky');
                $('.container-fluid').addClass('container-fluid-sticky');
            }
        }
        else {
            if(pagemenu.hasClass('page-menu-sticky')) {
                pagemenu.removeClass('page-menu-sticky');
                $('.container-fluid').removeClass('container-fluid-sticky');
            }
        }
    }
    
});

$(document).ready(function() {
    console.log('ready');
    var loader = $('#page-loader');
    var body = $('#page-body');
    var htmlBody = $('#page-top');
    p=0;
    
    pagemenu = $('.page-menu');

    timeout_trigger();

    setTimeout(function() {
        loader.removeClass('load-show');
        loader.removeClass('loader');
        loader.addClass('load-hide');

        body.removeClass('load-hide');
        body.addClass('load-show');

        htmlBody.removeClass('body-onload');
    }, 3000);

    // smooth scrolling
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});