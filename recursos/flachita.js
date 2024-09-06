var fixmeTop = $('.fixme').offset().top;
$(window).scroll(function() {
    var currentScroll = $(window).scrollTop();
    if (currentScroll >= fixmeTop) {
        $('.fixme').css({
            position: 'fixed',
            top: '50%',
            left: '80px'
        });
    } else {
        $('.fixme').css({
            position: 'static'
        });
    }
});