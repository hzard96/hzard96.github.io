$(document).ready(function(){
    // ⭐ 최소화된 시간 자동 갱신 함수 ⭐
    function updateT() {
        const n = new Date();
        
        // 1. 현재 시간 표시 (HH:00 포맷)
        $('#ranking-time').text(`${String(n.getHours()).padStart(2, '0')}:00`);

        // 2. 다음 정각까지 남은 시간 계산 및 예약
        const next = new Date(n.getTime());
        next.setHours(n.getHours() + 1, 0, 5); // 다음 시간 0분 5초로 설정
        
        setTimeout(updateT, next.getTime() - n.getTime());
    }

    // 페이지 로드 시 최초 실행
    if ($('#ranking-time').length) { 
        updateT();
    }
    
});

$(function(){
    $('.modal-close').click(function(){
      $('.modal').hide();
    })
  
  });