$(function () {
  // 画像拡大表示
  var luminousTrigger = document.querySelector('.luminous');
  if (luminousTrigger !== null) {
    new Luminous(luminousTrigger);
  }
  // グラデーション
  var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          ['#243949', '#517fa4'],
          ['#2b5876', '#4e4376'],
          ['#a8caba', '#5d4157']
        ]
      }
    }
  });
  // スムーススクロール
  $('nav a').on('click', function (e) {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    position -= $('.header').height();
    $('html, body').animate({
      'scrollTop': position
    }, 500);
    e.preventDefault();
  });
  //タブ切り替え
  $('.tab').click(function(){
    $('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('.is-show').removeClass('is-show');
    const index = $(this).index();
    $('.panel').eq(index).addClass('is-show');
  });
  //アコーディオン
  $('.qanda-item').on('click', function () {
    var fq = $(this).children(".qanda-q");
    console.log(fq);
    var fa = $(this).children(".qanda-a");
    console.log(fa);
    if ($(fa).css('display') === 'none') {
      $(fq).addClass('active');
    } else {
      $(fq).removeClass('active');
    }
    $(fa).slideToggle();
  });
    //wow
  new WOW().init();
  //sweetalert
  $('.mv-btn').click(function () {
    swal("採用ありがとうございます！", "ジョークです(^_^;)", "success");
  });
});