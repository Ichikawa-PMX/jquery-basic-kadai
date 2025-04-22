// 色変化
$(function () {
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });
 });


//  文字変化
 $(function () {
  $('#change-text').on('click', function() {
    $('#target').text('Hello!');
  });
 });


   // id属性がfadeOutの要素がクリックされたら
 $(function () {
  $('#fade-out').on('click', function() {
    // フェードアウトする
    $('#target').fadeOut();
  });
 });


 // id属性がfadeInの要素がクリックされたら
 $(function () {
 $('#fade-in').on('click', function() {
  // フェードインする
  $('#target').fadeIn();
});
});