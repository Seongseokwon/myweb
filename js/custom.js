var nav = $("#mainNav ul li"); //버튼을 변수에 할당(저장)
var cont = $("#contents > section"); //컨텐츠를 변수에 할당
//버튼을 클릭했을때
nav.click(function(e) {
  e.preventDefault(); // #의 기본 기능을 차단
  var target = $(this); //클릭한 타겟을 변수에 할당
  var index = target.index(); //클릭한 타겟에 번호를 할당
  //alert(index);  번호와 컨텐츠를 연결
  var section = cont.eq(index); //클릭한 버튼과 컨텐츠를 연결
  var offset = section.offset().top; //각 컨텐츠의 오프셋 값을 할당
  //alert(offset);
  $("html, body").animate(
    {
      scrollTop: offset
    },
    1000,
    "easeInOutExpo"
  );
});

$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll >= cont.eq(0).offset().top) {
    nav.removeClass("active");
    nav.eq(0).addClass("active");
  }
  if (wScroll >= cont.eq(1).offset().top) {
    nav.removeClass("active");
    nav.eq(1).addClass("active");
  }
  if (wScroll >= cont.eq(2).offset().top) {
    nav.removeClass("active");
    nav.eq(2).addClass("active");
  }
  if (wScroll >= cont.eq(3).offset().top) {
    nav.removeClass("active");
    nav.eq(3).addClass("active");
  }
  if (wScroll >= cont.eq(4).offset().top) {
    nav.removeClass("active");
    nav.eq(4).addClass("active");
  }
});

$(".mNav").click(function() {
  $(".mainMenu").slideToggle();
});

$(window).resize(function() {
  var wWidth = $(this).width();
  if (wWidth >= 600 && $(".mainMenu").is(":hidden")) {
    $(".mainMenu").removeAttr("style");
  }
});
