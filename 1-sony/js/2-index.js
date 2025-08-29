$(function() {
    $('.cont3-color span').hover(function(){
        let $div = $(this).closest('div').parent();
        $div.find('> div > img').attr('src', $(this).data('img'));
        $div.find('p.color-name').text($(this).data('color'));
    });

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('header, .cont').addClass('shrink');
        } else {
            $('header, .cont').removeClass('shrink');
        }
    });
});