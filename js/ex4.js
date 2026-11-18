// JavaScript Document

$(document).ready(function(){

//menu
	$(".menu").click(function(){ 
		$("nav").slideToggle();//slideToggle像手風琴一樣開合
	});

//menu rwd
	$(window).on('load resize',function(){
		//偵測視窗在導入、變形的情況下，導覽列是否需要顯示。目前是以768大小為偵測數值。
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});

//first but + content
	$(".list").eq(0).addClass("ch_bg");//未進行點擊時，第一個按鈕就先變色
	$(".content").hide().eq(0).show();//除了第一個內容外，其他內容先隱藏

	
//click event
	$(".list").click(function(){
        $(this).addClass("ch_bg").siblings().removeClass("ch_bg");
		//DOM會幫從先讀到的開始編號 0開始
		var _index = $(this).index();//var變數 指定為點擊的按鈕編號
		$(".content").stop(true, true).hide().eq(_index).fadeIn(600);
		//漸入淡出效果600毫秒
	});

//swiper
	 var swiper = new Swiper('.mySwiper', {
		speed: 3000,//切換速度
        spaceBetween: 0,//間距
        centeredSlides: true,
        autoplay: {
          delay: 2500,//停留時間
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

});