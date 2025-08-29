$(function(){
  let i=0, c=0, txts=$('.text-box p'), speed=100;
  function type(){
    let t=txts.eq(c).text();
    txts.hide().eq(c).text('').show();
    i=0;
    let timer=setInterval(()=>{
      if(i<t.length) txts.eq(c).append(t[i++]);
      else {
        clearInterval(timer);
        c=(c+1)%txts.length;
        setTimeout(type, 1000);
      }
    }, speed);
  }
  type();
});