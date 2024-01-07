$(function () {
  $(document).on('scroll',function()  {
    console.log('scrollイベントが発生しました2');
  });

});

$(window).on('load', () => {
  console.log('loadイベントが発生しましたa');
});


