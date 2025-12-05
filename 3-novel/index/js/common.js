$(document).ready(function(){
    // 1. 계정 아이콘 클릭 시 메뉴 토글 (열기/닫기)
    var $accountIcon = $('.menu ul li:nth-child(2) > span');
    $accountIcon.click(function(){
        $(this).parent().find('.sub').slideToggle(300);
    });

    // 2. 모드 토글 (성인/일반)
    $('#modeToggle').click(function(){
        $('#ch1').toggleClass('active');
        $('#ch2').toggleClass('active');
        
        if ($('#ch2').hasClass('active')) {
            $('body').addClass('adult-mode');
        } else {
            $('body').removeClass('adult-mode');
        }
    });
    
    // ⭐ 3. 닫기 버튼(X) 클릭 시, 계정 아이콘 클릭 이벤트를 강제 실행하여 메뉴를 닫습니다.
    $('.profile-actions .material-symbols-outlined:last-child').click(function(){
        // X 버튼 클릭 시, account_circle 아이콘의 click 이벤트를 실행 (메뉴 닫기)
        $accountIcon.trigger('click'); 
    });

  });

