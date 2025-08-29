$(function() {
  $('.menu > ul > li').click(function() {
    $(this).children('.sub').stop().slideToggle('slow');
    $('main').toggleClass('backpage');
  });

  $('.accordion-menu  span').click(function() {
    // 다른 항목의 내용 닫기
    $(this).next('ul').slideToggle();    
    
  });



});