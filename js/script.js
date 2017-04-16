$(document).ready(function() {
    console.log('ready');
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