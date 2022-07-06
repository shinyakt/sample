//読み込みテスト    $('.en-copy').css('color','red');

$(function(){

    //ハンバーガーメニュー
    $('.burger-btn').on('click',function(){
        $('.header-nav').fadeToggle(300);     //要素が表示の時、非表示にする。非表示の時、表示にする。
        $(this).toggleClass('cross');
        $('body').toggleClass('noscroll');   //スクロールの固定
        $('.main-copy').fadeToggle(300);
    });


});
