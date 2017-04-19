var p = 0;
function timeout_trigger() {
    $(".progress-view").text(p+"%");
    console.log(p);
    if(p <= 100) {
        setTimeout('timeout_trigger()', 60);
    }
    p+=2;
}
$(document).ready(function() {
    console.log('ready');
    var loader = $('#page-loader');
    var body = $('#page-body');
    var htmlBody = $('#page-top');
    p=0;

    timeout_trigger();

    setTimeout(function() {
        loader.removeClass('load-show');
        loader.removeClass('loader');
        loader.addClass('load-hide');

        body.removeClass('load-hide');
        body.addClass('load-show');

        htmlBody.removeClass('body-onload');
    }, 3000);

    $(window).on('scroll', function () {
        var scrollTop = $(this).scrollTop();
        $('.section').each(function() {
            var target = $(this).offset().top;
            console.log(target, scrollTop);
            var id = $(this).attr('id');
            console.log(id);

            if (scrollTop + 50 >= target) {
                $('#menu > ul > li > a').removeClass('menu-active');
                $('#menu > ul > li > a[href="#' + id + '"]').addClass('menu-active');
            }
        });
    });
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
