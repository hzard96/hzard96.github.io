$(function () {
  $('section.cont2 ul li').click(function () {
    const index = $(this).data('index');
    const $imgBox = $(this).closest('.cont2').find('.img-box');

    // 이미지 바꾸기
    $imgBox.find('img').removeClass('active').eq(index).addClass('active');

    // 선택된 li에 시각 피드백 주기 (예: outline)
    $(this).addClass('active').siblings().removeClass('active');
  });

  // 스크롤 시 shrink 효과
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 0) {
      $('header, .cont').addClass('shrink');
    } else {
      $('header, .cont').removeClass('shrink');
    }
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > $('.cont1').offset().top + $('.cont1').outerHeight()) {
    $('.bar').show().addClass('fixed');
    $('header, .cont').hide();
  } else {
    $('.bar').hide().removeClass('fixed');
    $('header, .cont').show();
  }
});
